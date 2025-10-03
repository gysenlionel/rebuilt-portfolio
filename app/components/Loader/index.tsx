import { Earth, Rocket } from '../../../app/svg/AllSvg'

export default function Loader() {
  return (
    <div className="w-screen h-screen bg-customWhite flex flex-col justify-center items-center z-50">
      <div className="font-karla">Loading...</div>
      <Earth width={100} />
      <Rocket
        width={30}
        fill="#ccc"
        className=" animate-[rocket-circle-sm_6s_linear_infinite] absolute -traslate-x-1/2 translate-y-0"
      />
    </div>
  )
}
