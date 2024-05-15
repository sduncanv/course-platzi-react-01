
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import Card from '../../Components/Card'
import { ShoppingCartContext } from '../../Context'

function Home() {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            )
        } else {
            return (
                <div>We don't have avything.</div>
            )
        }
    }

    // const renderView = () => {
    //     const itemsToRender = context.searchByTitle?.length > 0
    //         ? context.filteredItems
    //         : context.items;
    
    //     if (itemsToRender?.length > 0) {
    //         return itemsToRender.map(item => (
    //             <Card key={item.id} data={item} />
    //         ));
    //     } else {
    //         return <p>No results found</p>;
    //     }
    // };

    return (
        <Layout>
            <div className='flex w-80 relative items-center justify-center mb- 4'>
                <h1 className='font-medium text-xl'>Exclusive products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}
  
export default Home