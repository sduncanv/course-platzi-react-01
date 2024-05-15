import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCart from '../../Components/OrdersCart'

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex w-80 relative items-center justify-center mb- 4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link 
                    key={index}
                    to={`/my-orders/${index}`}>
                        <OrdersCart
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}/>
                    </Link>
                ))
            }
        </Layout>
    )
}
  
export default MyOrders