import {useParams, useSearchParams, useLocation} from 'react-router-dom'

function Page3() {
  let params = useParams()
  // /page3/123456 => {id: '123456'}
  console.log(params)

  // /page3/123456?a=123&b=234 => [URLSearchParams, ƒ]
  let [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('a')) // 123

  // /page3/123456?a=888&b=666 => {pathname: '/page3/123456', search: '?a=888&b=666', hash: '', state: null, key: 'rn779kl5'}
  let location = useLocation()
  console.log(location)

  return <div>
    <h1>【Page3】</h1>
    <button onClick={() => {
      setSearchParams({
        a: 888,
        b: 666
      })
    }}>修改查询参数
    </button>
  </div>

}

export default Page3
