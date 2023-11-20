


import { productData } from '~/static/data'
import { useSelector } from 'react-redux'
import ProductCard from '~/components/Products/ProductCard'
import Reveal from '../Reveal'
function FeatureProduct() {
  const { allProduct } = useSelector(state => state.product)
  return (
    <div className='w-full' >
      <div className="w-[80%] mx-auto">
        <div className='w-full mt-8'>
          <div className=' text-shop_main font-medium text-xl py-4 pl-4'> Features Product</div>
          <ul
            className="grid border-0 mb-12
            gap-[20px]  md:gap-[25px]  lg:gap-[25px]  xl:gap-[30px] 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          >
            {allProduct?.map((d, i) =>
              <Reveal>
                <ProductCard data={d} key={i} />
              </Reveal>
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default FeatureProduct
