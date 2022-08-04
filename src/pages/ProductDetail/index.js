import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  Stack,
  PagerIndicator,
  Input,
} from "components";

const ProductDetailPage = () => {
  function handleNavigate11() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate12() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-merriweather mx-[auto] overflow-auto w-[100%]">
        <Column className="items-center lg:pr-[107px] xl:pr-[122px] pr-[138px] 3xl:pr-[165px] w-[100%]">
          <Row className="bg-gray_900_b2 items-center lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] shadow-bs w-[100%]">
            <Img
              src="images/img_menu.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] w-[2%]"
              alt="menu"
            />
            <Img
              src="images/img_group2.png"
              className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[395px] xl:ml-[451px] ml-[508px] 3xl:ml-[609px] mt-[1px] w-[12%]"
              alt="GroupTwo"
            />
            <Img
              src="images/img_search.png"
              className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[325px] xl:ml-[371px] ml-[418px] 3xl:ml-[501px] lg:w-[24px] xl:w-[27px] w-[31px] 3xl:w-[37px]"
              alt="search"
            />
            <Img
              src="images/img_cart.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="cart"
            />
          </Row>
          <Row className="3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] mt-[97px] w-[84%]">
            <Column
              className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[21px] xl:p-[24px] p-[27px] 3xl:p-[32px] w-[50%]"
              style={{ backgroundImage: "url('images/img_group4.png')" }}
            >
              <Row className="items-center justify-between lg:mt-[266px] xl:mt-[304px] mt-[342px] 3xl:mt-[410px] w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rotate-[180deg] rounded-radius50 lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                  size="mdIcn"
                  variant="icbOutlineBlack9003f"
                >
                  <Img
                    src="images/img_vector.png"
                    className="flex items-center justify-center"
                    alt="Vector"
                  />
                </Button>
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                  size="mdIcn"
                  variant="icbOutlineBlack9003f"
                >
                  <Img
                    src="images/img_vector.png"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
              </Row>
              <Img
                src="images/img_group3.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:mt-[252px] xl:mt-[289px] mt-[325px] 3xl:mt-[390px] w-[8%]"
                alt="GroupThree"
              />
            </Column>
            <Column className="lg:mb-[43px] xl:mb-[49px] mb-[56px] 3xl:mb-[67px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] w-[42%]">
              <Text className="font-bold font-merriweather lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px] text-gray_900 w-[auto]">
                Sona Armless Chair
              </Text>
              <Text className="font-jacquesfrancois font-normal mt-[3px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                $400.00
              </Text>
              <Text className="font-bold font-interui mt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                <span className="text-gray_900 font-medium">Available</span>
                <span className="text-gray_900"> : </span>
                <span className="text-gray_900 font-normal not-italic">
                  In Stock
                </span>
              </Text>
              <Text className="font-interui font-normal leading-[normal] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[95%]">
                Versatile elegance for dining room, office or living room. This
                seating solution offers great appeal. Bamboo chairs combine
                premium quality materials with unique high-style design, with
                the advanced product engineering and packaging reinforcement,
                each product is designed, manufactured and packaged with
                shipping in mind.
              </Text>
              <Row className="font-interui items-center lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[65%]">
                <Column className="lg:pr-[112px] xl:pr-[128px] pr-[144px] 3xl:pr-[172px] w-[71%]">
                  <Text className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    COLOR
                  </Text>
                  <Img
                    src="images/img_menu_gray_800.png"
                    className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                    alt="menu One"
                  />
                </Column>
                <Column className="w-[29%]">
                  <Text className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    SIZE
                  </Text>
                  <Row className="items-center justify-between ml-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[99%]">
                    <Text className="bg-gray_200 font-medium lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius2 text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_800 tracking-ls1 w-[24px]">
                      XL
                    </Text>
                    <Button
                      className="font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 w-[25%]"
                      shape="RoundedBorder2"
                      size="sm"
                      variant="FillOrangeA200"
                    >
                      S
                    </Button>
                    <Button
                      className="font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 w-[25%]"
                      shape="RoundedBorder2"
                      size="sm"
                      variant="FillGray200"
                    >
                      M
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Row className="font-interui items-center justify-between mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[100%]">
                <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  QTY
                </Text>
                <Button
                  className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center w-[19%]"
                  shape="CircleBorder24"
                  variant="OutlineGray500"
                >
                  - 01 +
                </Button>
                <Button
                  className="flex items-center justify-center text-center w-[63%]"
                  leftIcon={
                    <Img
                      src="images/img_cart_gray_900.png"
                      className="w-[26px] h-[26px] mr-[8px] text-center lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[23px] xl:h-[24px] xl:mr-[7px] 2xl:h-[27px] 3xl:w-[31px] 3xl:h-[32px] 3xl:mr-[9px]"
                      alt="cart"
                    />
                  }
                  shape="RoundedBorder10"
                  size="xl"
                  variant="FillOrangeA200"
                >
                  <div className="bg-transparent font-bold lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 tracking-ls208">
                    SHOP NOW
                  </div>
                </Button>
              </Row>
              <Row className="font-interui items-center lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] w-[40%]">
                <Text className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  SHARE
                </Text>
                <Img
                  src="images/img_social.png"
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[54%]"
                  alt="social"
                />
              </Row>
            </Column>
          </Row>
          <Text className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-gray_900 w-[auto]">
            Related Product
          </Text>
        </Column>
        <Column className="font-jacquesfrancois items-end lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] lg:pl-[115px] xl:pl-[131px] pl-[148px] 3xl:pl-[177px] w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <Stack className="lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] w-[100%]">
              <Row className="absolute h-[max-content] inset-y-[0] justify-between my-[auto] right-[10%] w-[39%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[58%]"
                  style={{ backgroundImage: "url('images/img_item3.png')" }}
                >
                  <PagerIndicator
                    className="h-[12px] lg:mt-[311px] xl:mt-[355px] mt-[400px] 3xl:mt-[480px] w-[max-content]"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] border-white_A700 border-2 border-solid"
                    selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                    unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  />
                </Column>
                <PagerIndicator
                  className="h-[12px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[328px] xl:mt-[375px] mt-[422px] 3xl:mt-[506px] w-[max-content]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] border-white_A700 border border-solid"
                  selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                />
              </Row>
              <Row className="absolute items-center w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center lg:pt-[295px] xl:pt-[338px] pt-[380px] 3xl:pt-[456px] w-[22%]"
                  style={{ backgroundImage: "url('images/img_group25.png')" }}
                >
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="price One"
                    placeholder="$300.00"
                    suffix={
                      <Img
                        src="images/img_cart.png"
                        className="w-[16px] h-[16px] bg-orange_A200 lg:w-[12px] lg:h-[13px] lg:mx-[10px] xl:w-[14px] xl:h-[15px] xl:mx-[11px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mx-[15px] rounded-radius21 my-[auto] mx-[13px]"
                        alt="cart"
                      />
                    }
                  ></Input>
                </Column>
                <Stack
                  className="bg-cover bg-repeat lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] w-[22%]"
                  style={{ backgroundImage: "url('images/img_item2.png')" }}
                >
                  <Img
                    src="images/img_group3.png"
                    className="absolute bottom-[0] lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-x-[0] mx-[auto] w-[13%]"
                    alt="Group"
                  />
                </Stack>
                <Img
                  src="images/img_rectangle.png"
                  className="lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] lg:ml-[326px] xl:ml-[373px] ml-[420px] 3xl:ml-[504px] rounded-radius10 w-[22%]"
                  alt="Rectangle"
                />
              </Row>
            </Stack>
          </div>
        </Column>
        <Column className="font-interui items-center 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] lg:pr-[107px] xl:pr-[122px] pr-[138px] 3xl:pr-[165px] w-[100%]">
          <footer className="bg-gray_900 w-[100%]">
            <Column className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
              <Row className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:mr-[178px] xl:mr-[203px] mr-[229px] 3xl:mr-[274px] w-[79%]">
                <Row className="items-center justify-between w-[51%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                    SUBSCRIBE TO OUR NEWSLETTER
                  </Text>
                  <Button
                    className="flex items-center justify-center text-center w-[42%]"
                    rightIcon={
                      <Img
                        src="images/img_arrow.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        alt="arrow"
                      />
                    }
                    shape="CircleBorder20"
                    variant="FillBluegray901"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] tracking-ls1">
                      Enter Your E-mail Address Here
                    </div>
                  </Button>
                </Row>
                <div className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] h-[97px] 2xl:h-[98px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] w-[1px]"></div>
                <Text className="font-bold lg:ml-[177px] xl:ml-[202px] ml-[228px] 3xl:ml-[273px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                  JOIN US ON
                </Text>
                <Button
                  className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  onClick={handleNavigate11}
                  size="smIcn"
                  variant="icbFillIndigo600"
                >
                  <Img
                    src="images/img_facebook.png"
                    className="flex items-center justify-center"
                    onClick={handleNavigate11}
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  onClick={handleNavigate12}
                  size="smIcn"
                  variant="icbFillBlue300"
                >
                  <Img
                    src="images/img_twitter.png"
                    className="flex items-center justify-center"
                    onClick={handleNavigate12}
                    alt="twitter"
                  />
                </Button>
                <Img
                  src="images/img_eye.png"
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="eye"
                />
              </Row>
              <div className="bg-gray_201 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[1px]"></div>
              <Row className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[73%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 tracking-ls1 w-[auto]">
                  TERMS & CONDITION POLICY
                </Text>
                <Img
                  src="images/img_group2_99X112.png"
                  className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[199px] xl:ml-[228px] ml-[257px] 3xl:ml-[308px] w-[11%]"
                  alt="GroupTwo One"
                />
                <Text className="font-medium lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  © 2019 Bamboo All Rights Reserved
                </Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ProductDetailPage;
