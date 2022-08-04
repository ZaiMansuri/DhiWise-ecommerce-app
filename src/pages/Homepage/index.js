import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  PagerIndicator,
  List,
  Input,
  Line,
} from "components";

const HomepagePage = () => {
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-repeat font-interui items-center lg:pb-[32px] xl:pb-[37px] pb-[42px] 3xl:pb-[50px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group2_728X1440.png')" }}
        >
          <Row className="bg-gray_900_b2 items-center lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] shadow-bs w-[100%]">
            <Img
              src="images/img_menu.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] w-[2%]"
              alt="menu"
            />
            <Img
              src="images/img_group2_47X169.png"
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
          <Row className="justify-between lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[94%]">
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center lg:mt-[117px] xl:mt-[134px] mt-[151px] 3xl:mt-[181px] rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              size="lgIcn"
              variant="icbOutlineBlack900"
            >
              <Img
                src="images/img_vector_gray_900.png"
                className="flex items-center justify-center"
                alt="Vector"
              />
            </Button>
            <Column className="items-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] w-[70%]">
              <Text className="font-bold font-interui lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_901 lg:tracking-ls3 2xl:tracking-ls4 xl:tracking-ls4 tracking-ls48 3xl:tracking-ls5 w-[auto]">
                INDOORS
              </Text>
              <Text className="font-merriweather font-normal lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] not-italic lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px] text-gray_901 w-[auto]">
                See Bamboo’s New Range Of Indoor Furniture
              </Text>
              <Text className="font-interui font-normal leading-[normal] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-gray_901 w-[59%]">
                Classic meet modern living, <br />
                Bamboo has a fantastic range of indoor furniture,
                <br />
                perfect for any modern home.
              </Text>
            </Column>
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center lg:mt-[117px] xl:mt-[134px] mt-[151px] 3xl:mt-[181px] rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              size="lgIcn"
              variant="icbOutlineBlack900"
            >
              <Img
                src="images/img_vector.png"
                className="flex items-center justify-center"
                alt="Vector One"
              />
            </Button>
          </Row>
          <Button
            className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[13%]"
            shape="CircleBorder30"
            size="lg"
            variant="FillOrangeA200"
          >
            SEE MORE
          </Button>
          <PagerIndicator
            className="h-[25px] lg:mt-[127px] xl:mt-[145px] mt-[164px] 3xl:mt-[196px] w-[max-content]"
            count={4}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] bg-white_A700"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] border-white_A700 border-2 border-solid"
            selectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] mx-[10.00px] xl:mx-[8px]"
            unselectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] mx-[10.00px] xl:mx-[8px]"
          />
        </Column>
        <Text className="font-bold font-merriweather 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 w-[auto]">
          Featured Product
        </Text>
        <List
          className="font-jacquesfrancois lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[87%]"
          orientation="horizontal"
        >
          <Column className="items-center lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] w-[100%]">
            <Img
              src="images/img_product1.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"
              alt="ProductOne"
            />
            <Img
              src="images/img_product4.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductFour"
            />
            <Img
              src="images/img_product7.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductSeven"
            />
            <Img
              src="images/img_product10.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductTen"
            />
          </Column>
          <Column className="items-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Column
              className="bg-cover bg-repeat items-center lg:pt-[342px] xl:pt-[391px] pt-[440px] 3xl:pt-[528px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group4.png')" }}
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="price"
                placeholder="$400.00"
                suffix={
                  <Img
                    src="images/img_cart.png"
                    className="w-[16px] h-[16px] bg-orange_A200 lg:w-[12px] lg:h-[13px] lg:mx-[10px] xl:w-[14px] xl:h-[15px] xl:mx-[11px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mx-[15px] rounded-radius21 my-[auto] mx-[13px]"
                    alt="cart"
                  />
                }
              ></Input>
            </Column>
            <Img
              src="images/img_product5.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"
              alt="ProductFive"
            />
            <Img
              src="images/img_product8.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"
              alt="ProductEight"
            />
            <Img
              src="images/img_product11.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"
              alt="ProductEleven"
            />
          </Column>
          <Column className="items-center lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] w-[100%]">
            <Img
              src="images/img_product3.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"
              alt="ProductThree"
            />
            <Img
              src="images/img_product6.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductSix"
            />
            <Img
              src="images/img_product9.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductNine"
            />
            <Img
              src="images/img_product12.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              alt="ProductTwelve"
            />
          </Column>
        </List>
        <Button
          className="font-bold font-interui lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[13%]"
          shape="RoundedBorder10"
          size="lg"
          variant="FillOrangeA200"
        >
          LOAD MORE
        </Button>
        <Column className="bg-gray_100 font-merriweather items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:p-[55px] xl:p-[63px] p-[71px] 3xl:p-[85px] w-[100%]">
          <Text className="font-bold lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
            Bamboo Products
          </Text>
          <Row className="font-interui justify-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[44%]">
            <Text className="font-medium mb-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
              CHAIR
            </Text>
            <Column className="items-center lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] w-[19%]">
              <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                CABINET
              </Text>
              <Line className="bg-orange_A200 h-[4px] mt-[3px] w-[54%]" />
            </Column>
            <Text className="font-medium mb-[3px] lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
              SOFA
            </Text>
            <Text className="font-medium mb-[3px] lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
              BENCH
            </Text>
          </Row>
          <Column className="items-center xl:mb-[105px] mb-[119px] 3xl:mb-[142px] lg:mb-[92px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] w-[99%]">
            <Row className="items-center justify-between w-[100%]">
              <Img
                src="images/img_product7.png"
                className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[31%]"
                alt="RectangleThirtyOne"
              />
              <Img
                src="images/img_product4.png"
                className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[31%]"
                alt="RectangleThirtyTwo"
              />
              <Img
                src="images/img_rectangle33.png"
                className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[31%]"
                alt="RectangleThirtyThree"
              />
            </Row>
            <Column className="bg-gray_400 lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:px-[175px] xl:px-[201px] px-[226px] 3xl:px-[271px] w-[100%]">
              <div className="bg-gray_600 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[43%]"></div>
            </Column>
          </Column>
        </Column>
        <footer className="bg-gray_900 font-interui w-[100%]">
          <Column className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
            <Row className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] w-[79%]">
              <Row className="items-center justify-between w-[51%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 tracking-ls1 w-[auto]">
                  SUBSCRIBE TO OUR NEWSLETTER
                </Text>
                <Button
                  className="flex items-center justify-center text-center w-[42%]"
                  rightIcon={
                    <Img
                      src="images/img_arrow_white_A700.png"
                      className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                      alt="Arrow"
                    />
                  }
                  shape="CircleBorder20"
                  variant="FillGray902"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] tracking-ls1">
                    Enter Your E-mail Address Here
                  </div>
                </Button>
              </Row>
              <div className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] h-[97px] 2xl:h-[98px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] w-[2px]"></div>
              <Text className="font-bold lg:ml-[177px] xl:ml-[202px] ml-[228px] 3xl:ml-[273px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 tracking-ls1 w-[auto]">
                JOIN US ON
              </Text>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                onClick={handleNavigate6}
                size="smIcn"
                variant="icbFillIndigo600"
              >
                <Img
                  src="images/img_facebook.png"
                  className="flex items-center justify-center"
                  onClick={handleNavigate6}
                  alt="facebook"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                onClick={handleNavigate7}
                size="smIcn"
                variant="icbFillBlue300"
              >
                <Img
                  src="images/img_twitter.png"
                  className="flex items-center justify-center"
                  onClick={handleNavigate7}
                  alt="twitter"
                />
              </Button>
              <Img
                src="images/img_eye.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="eye"
              />
            </Row>
            <div className="bg-gray_201 h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]"></div>
            <Row className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[73%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_50 tracking-ls1 w-[auto]">
                TERMS & CODITION POLICY
              </Text>
              <Img
                src="images/img_group2_1.png"
                className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] w-[11%]"
                alt="GroupTwo One"
              />
              <Text className="font-bold lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_50 w-[auto]">
                © 2019 Bamboo All Rights Reserved
              </Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepagePage;
