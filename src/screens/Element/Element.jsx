import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Card } from '../../components/Card'
import { DiscordWhite } from '../../components/DiscordWhite'
import { MainButton } from '../../components/MainButton'
import { SecondaryButton } from '../../components/SecondaryButton'
import { Wallet } from '../Wallet'

const Home = () => <div>Home Page</div>
const About = () => <div>About Page</div>
const Contact = () => <div>Contact Page</div>

export const Element = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <div className="flex justify-center w-full">
            <div className="bg-switch w-full min-h-screen bg-cover bg-top md:min-w-[2500px]">
              <div className="flex xs:pl-[40px] md:pl-0 md:justify-center w-auto">
                <header className="flex mt-[50px] md:w-[700px] lg:w-[930px] xl:w-[1250px] md:justify-between items-center">
                  <div className="inline-flex justify-start md:justify-center items-center gap-[16.25px]">
                    <img
                      className="relative w-[60px] h-[60px] rotating360"
                      alt="Group"
                      src="/img/group-12.png"
                    />
                    <p className="relative w-fit [font-family:'Righteous',Helvetica] font-normal text-transparent text-[26px] leading-[normal]">
                      <span className="text-[#ffb24b]">SAT</span>
                      <span className="text-[#ffffff]">OLOGY</span>
                    </p>
                  </div>
                  <div className="hidden md:flex">
                    <SecondaryButton
                      className="!mr-[-1.00px] !flex-[0_0_auto]"
                      size="l"
                      state="default"
                      text="EARLY ACCESS"
                      link="https://forms.gle/M47ndNGs8JCts73g6"
                    />
                  </div>
                </header>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center xs:pt-24 md:pt-24">
                <div className="flex flex-col justify-center xl:justify-start z-10 max-w-[804px] ">
                  <p className="[font-family:'Righteous',Helvetica] font-normal text-[42px] lg:text-[58px] 2xl:text-[72px] text-white text-center xl:text-left xl:ml-14 2xl:ml-0 lg:p-4">
                    LAUNCH SWAP STAKE
                    <br />
                    YOUR <span className={`text-[#ffb24b]`}>SATS</span>
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[18px] lg:text-[22px] xl:text-[28px] leading-[32px] text-center p-4 xl:text-left xl:ml-10 2xl:ml-0 md:p-6">
                    DISCOVER <span className={`text-[#ffb24b]`}>BITCOIN</span> TREASURES
                  </p>
                  <div className="flex items-center max-w-[450px] flex-col mx-auto xl:mx-0 md:flex-row pt-[20px] xl:p-4 ">
                    <MainButton
                      className="w-full h-20 xl:ml-14 2xl:ml-0"
                      size="l"
                      state="default"
                      link="https://forms.gle/M47ndNGs8JCts73g6"
                    />
                  </div>
                </div>
                <div
                  className="xs:hidden sm:flex w-[424px] h-[424px] md:w-[574px] md:h-[574px] xl:w-[674px] xl:h-[674px] bg-cover z-0 rotate-div"
                  style={{
                    backgroundImage: "url('./img/illustration.png')"
                  }}
                />
              </div>

              <div className="flex flex-col justify-center w-screen items-center mx-auto pt-72 sm:pt-14 md:pt-48 xl:pt-80 px-[10px]">
                <div className="[font-family:'Righteous',Helvetica] font-normal text-[42px] lg:text-[58px] text-center leading-[43px] text-white">
                  HOW <span className={`text-[#ffb24b]`}>SAT</span>OLOGY WORKS
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1350px] md:pt-10">
                  <Card
                    className="w-full"
                    headingClassName="!tracking-[0] !text-[36px] ![font-style:unset] !font-bold ![font-family:'Poppins',Helvetica] !leading-[48.0px]"
                    satoshiRegular="/img/satoshi-regular-elipse-1-1.svg"
                    textClassName="!tracking-[0] !text-[18px] ![font-style:unset] !font-normal ![font-family:'Poppins',Helvetica] !leading-[35.2px]"
                    description={`Launch your own special sat that will resonate with collectors and traders. From FTX Crash sats to John sats. `}
                  />
                  <Card
                    className="w-full"
                    headingClassName="!tracking-[0] !text-[36px] ![font-style:unset] !font-bold ![font-family:'Poppins',Helvetica] !leading-[48.0px]"
                    satoshiRegular="/img/satoshi-regular-elipse-1-2.svg"
                    text="SWAP"
                    textClassName="!tracking-[0] !text-[18px] ![font-style:unset] !font-normal ![font-family:'Poppins',Helvetica] !leading-[35.2px]"
                    description={`Satology aligns the popular AMM model allowing instant buying and selling of special sats. .`}
                  />
                  <Card
                    className="w-full"
                    headingClassName="!tracking-[0] !text-[36px] ![font-style:unset] !font-bold ![font-family:'Poppins',Helvetica] !leading-[48.0px]"
                    satoshiRegular="/img/satoshi-regular-elipse-1-3.svg"
                    text="TRADE"
                    textClassName="!tracking-[0] !text-[18px] ![font-style:unset] !font-normal ![font-family:'Poppins',Helvetica] !leading-[35.2px]"
                    description={`Become a liquidity provider and earn rewards. When users swap, LP earns a cut of the pool’s fees proportional to their stake.`}
                  />
                  <Card
                    className="w-full"
                    headingClassName="!tracking-[0] !text-[36px] ![font-style:unset] !font-bold ![font-family:'Poppins',Helvetica] !leading-[48.0px]"
                    satoshiRegular="/img/satoshi-regular-elipse-1-3.svg"
                    text="POOL"
                    textClassName="!tracking-[0] !text-[18px] ![font-style:unset] !font-normal ![font-family:'Poppins',Helvetica] !leading-[35.2px]"
                    description={`Explore Digital Numismatic world.  Learn everything about satoshis: types of sats, rarities, sat hunting & tips from greatest Satologists.`}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
                <div className="xl:max-w-[1350px] lg:max-w-[920px] md:max-w-[700px] mx-auto w-full">
                  <footer className="flex flex-col items-center justify-center gap-[32px] mt-24 pt-[30px] pb-[30px] border-t [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-social-links">
                    <div className="flex flex-col-reverse md:flex-row gap-[24px] items-center justify-between relative self-stretch w-full">
                      <div className="inline-flex items-center gap-[24px]">
                        <a
                          href="mailto:satologyio@proton.me"
                          className="relative block w-fit [font-family:'Poppins',Helvetica] font-normal text-social-links text-[16px] tracking-[0] leading-[24px] whitespace-nowrap"
                        >
                          satologyio@proton.me
                        </a>
                      </div>
                      <div>
                        <div className="flex flex-col items-center">
                          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-social-links text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Partners
                          </div>
                          <div className="inline-flex items-center gap-[24px]">
                            <a href="https://twitter.com/raresatsociety">
                              <img
                                className="relative w-[50px] h-[50px] logo-partner rounded-[50%]"
                                alt="partner RSS"
                                src="/img/logo_rss.jpg"
                              />
                            </a>
                            <a href="https://twitter.com/bison_labs">
                              <img
                                className="relative w-[60px] h-[60px] logo-partner"
                                alt="partner Byzon Labs"
                                src="/img/logo_byzon_labs.png"
                              />
                            </a>
                            <a href="https://twitter.com/btcstartuplab">
                              <img
                                className="relative w-[50px] h-[50px] logo-partner rounded-[50%]"
                                alt="partner RSS"
                                src="/img/logo_b.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[30px]">
                        <DiscordWhite
                          className="!relative"
                          combinedShape="/img/combined-shape-3.svg"
                          discordClassName="bg-[url(./static/img/combined-shape-2.svg)]"
                        />
                        <a
                          href="https://twitter.com/satology_io"
                          className={`icon-social`}
                        >
                          <div className="bg-[url(./static/img/combined-shape-4.svg)] bg-[100%_100%] relative w-[40px] h-[40px]" />
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/earlyaccess"
        exact
        element={<Wallet />}
      />
      <Route
        path="/about"
        exact
        component={About}
      />
      <Route
        path="/contact"
        exact
        component={Contact}
      />
    </Routes>
  )
}
