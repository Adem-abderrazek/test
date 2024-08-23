import Image from 'next/image'

const Allcourses = (props) => {
    const arr=[1,4,5,6,8,
        ,2,3,47
    ]
  return (
    <div className={props.active?"allcorses-act absolute mt-10  ":"allcorses absolute mt-10   ml-24 "}>
        <div className="">
            <h2 className="text-2xl font-semibold mb-4">Explore your courses</h2>
        </div>
        <div className="flex flex-wrap gap-3">
{arr.map((ele)=>{
    return (
<div  className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 w-52">
            <div className="relative rounded-lg overflow-hidden mb-4" style={{ height: '150px' }}>
              <Image src='' alt='' layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <div className="text-gray-600 mb-2 font-semibold">krtlgm</div>
            <p className="text-gray-500 mb-2">hklymhklgmlkgfm</p>
            <div className="mt-2">
              <button
                className="bg-[#171a29] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#171A29] focus:outline-none"
                onClick={() => props.navigation('updatecourse')}
              >
                Update
              </button>
              <button
                className="bg-[#171a29] ml-1 text-white font-semibold py-2 px-4 rounded-md hover:bg-[#171A29] focus:outline-none"
                onClick={() => console.log(`Enrolling in course with ID: 1`)}
              >
                Delete
              </button>
            </div>
          </div>
    )
})}
</div>
    </div>
    
  )
}

export default Allcourses