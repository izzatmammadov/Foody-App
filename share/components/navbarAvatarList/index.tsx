import { useRouter } from "next/router"

export const NavbarAvatarList = () => {
    const navigate = useRouter()

    const logOut = () => {
      localStorage.removeItem("tokenObj")
      localStorage.removeItem("userInfo")
      navigate.push("/login")
    }
  return (
    <ul className="absolute top-12 w-[160px] bg-whiteLight2 z-50 hidden sm:flex flex-col gap-1 p-4 shadow-xl rounded-md">
        <li onClick={()=>{navigate.push("/userProfile")}} className="border-b-2 border-b-whiteLight3 pb-1 cursor-pointer font-medium hover:text-grayText2">Profile</li>
        <li onClick={()=>{navigate.push("/userBasket")}} className="border-b-2 border-b-whiteLight3 pb-1 cursor-pointer font-medium hover:text-grayText2">Your Basket</li>
        <li onClick={()=>{navigate.push("/userOrder")}} className="border-b-2 border-b-whiteLight3 pb-1 cursor-pointer font-medium hover:text-grayText2">Your Orders</li>
        <li onClick={()=>{navigate.push("/userCheckout")}} className="border-b-2 border-b-whiteLight3 pb-1 cursor-pointer font-medium hover:text-grayText2">Checkout</li>
        <li onClick={logOut} className="cursor-pointer font-medium hover:text-grayText2">Logout</li>
    </ul>
  )
}
