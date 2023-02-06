import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default function ContentMain({
  isMarginBottom,
  companyName,
  username,
  data,
}) {
  return (
    <>
      <div
        className={'overview_screen'}
        style={{
          marginBottom: isMarginBottom ? '200px' : '',
        }}
      >
        <div className="max-w-[1366px] ml-auto mr-auto">
          <div className="flex flex-row h-full w-full p-16">
            <img
              className="mt-[170px] absolute left-0"
              src={`${publicRuntimeConfig.staticImagePath}/left_h.svg`}
              layout="fill"
              alt="logo"
            />
            <div className="mx-auto w-full">
              <p className="text-[12px] text-[#FFFFFF]"> {companyName} </p>
              <p className="text-white text-2xl font-poppins mt-1">
                Welcome
                {username}!
              </p>
              <p className="text-[#E7E7E7] text-[40px] font-poppins font-bold mt-2">
                Let’s talk numbers
              </p>

              <div className="flex flex-row gap-[1.75%] mt-6">
                {data?.map((dataVal, index) => (
                  <div
                    key={index}
                    className="overflow_card_width rounded-lg bg-[#FFFFFF14] flex flex-col justify-center h-[242px] w-full"
                    style={{ alignItems: 'center' }}
                  >
                    <img className="w-12 h-12" src={dataVal?.logo} />
                    <p className="text-white text-6xl font-poppins font-bold mt-6">
                      {dataVal?.value}
                    </p>
                    <p className="text-white text-[21px] font-poppins font-medium ">
                      {dataVal?.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="ml-auto mb-auto absolute right-0 top-0"
              src={`${publicRuntimeConfig.staticImagePath}/right_h.svg`}
              layout="fill"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
