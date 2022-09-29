const path = require('path')
const fs = require('fs')
const { request, gql, GraphQLClient } = require('graphql-request')
const CACHE_PATH = path.resolve(process.cwd(), 'cache.json')
const domain = 'relavoux.myshopify.com'
const storefrontAccessToken = '11aad9a10d857df05169355cab8c0fbd'


const query = `
{
    products(first: 100) {
        edges {
          node {
            id
            title
            handle
			productType
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                originalSrc
                  altText
                }
              }
            }
          }
        }
      }
}`


const collection = `
{
    collections(first: 250) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            originalSrc
          }
  
        }
      }
    }
  }`

// Controllers

const fetchMerchant = async () => {
    const URL = `https://${domain}/api/2022-10/graphql.json`

    const options = new GraphQLClient(URL,{
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
  
    const data = await options.request(query)
    return JSON.parse(JSON.stringify(data))

}
fetchMerchant().catch((error) => console.error(error))



const fetchCollection = async () => {
    const URL = `https://${domain}/api/2022-10/graphql.json`

    const options = new GraphQLClient(URL,{
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
  
    const data = await options.request(collection)
    return JSON.parse(JSON.stringify(data))

}
fetchCollection().catch((error) => console.log(error))

const fetchCommon = async () => {
	const [products, collections] = await Promise.all([fetchMerchant(), fetchCollection()])
	return {  collections, products }
}



// Build cache

const buildCache = async force => {
	const parent_dir = path.dirname(CACHE_PATH)

	if (!fs.existsSync(parent_dir)) {
		console.log(`Cache directory '${parent_dir}' doesn't exist, attempting to create...`)
		fs.mkdirSync(parent_dir, { recursive: true })
	}

	const cache_exists = fs.existsSync(CACHE_PATH)

	if (cache_exists) {
		console.log(`Cache file at ${CACHE_PATH} already exists.`)
	}

	if (cache_exists && !force) {
		const ts = Date.now()
		const { mtimeMs } = fs.statSync(CACHE_PATH)

		const dif = parseInt((ts - mtimeMs) / 60000)
		console.log(`Cache was created ${dif} minutes ago.`)
		if (dif < 10) {
			console.log('Using current cache. To overwrite, use -f')
			return
		}
	}

	console.log('Fetching...')
	const data = await fetchCommon()
	console.log('Fetched')

	fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf8')
	console.log(`Cache file written to ${CACHE_PATH}`)
	process.exit()
}

// Read cache

const readCache = async () => {
	if (fs.existsSync(CACHE_PATH)) {
		return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
	}
	console.error(`Cache file not found at ${CACHE_PATH}!`)
	const data = await fetchMerchant()
	try {
		fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf8')
	} catch (error) {
		console.error(error)
	}
	console.log(`Cache file regenerated at ${CACHE_PATH}`)
	return data
}

// Clear cache
const deleteCache = () => {
	if (fs.existsSync(CACHE_PATH)) {
		try {
			fs.unlinkSync(CACHE_PATH)
			console.log('Cache file deleted')
		} catch (error) {
			console.error(error.toString())
		}
	} else {
		console.log('Clear cache - file not found')
	}
}

// Exports

module.exports = {
	CACHE_PATH,
	fetchMerchant,
	readCache,
	deleteCache,
	fetchCommon,
	fetchCollection
}

// Main

if (require.main === module) {
	const arg = process.argv[2]
	if (arg === '--clear') deleteCache()
	else buildCache(arg === '-f')
}