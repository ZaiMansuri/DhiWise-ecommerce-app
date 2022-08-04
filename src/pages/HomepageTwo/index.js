import React from "react";

import { Column, Row, Img, Button, Text, List, Line } from "components";

const HomepageTwoPage = () => {
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate10() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-interui items-center mx-[auto] w-[100%]">
        <Column className="bg-gray_801 items-center lg:pb-[186px] xl:pb-[213px] pb-[240px] 3xl:pb-[288px] w-[100%]">
          <Row className="bg-gray_801 items-center lg:p-[29px] xl:p-[33px] p-[38px] 3xl:p-[45px] shadow-bs w-[100%]">
            <Img
              src="images/img_menu.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] w-[2%]"
              alt="menu"
            />
            <Img
              src="images/img_group2_3.png"
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
          <Row className="items-center justify-between lg:mt-[199px] xl:mt-[228px] mt-[257px] 3xl:mt-[308px] w-[87%]">
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900.png"
                className="flex items-center justify-center"
                alt="Vector"
              />
            </Button>
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900_98X98.png"
                className="flex items-center justify-center"
                alt="Vector One"
              />
            </Button>
          </Row>
        </Column>
        <Text className="font-bold mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 w-[auto]">
          Featured Product
        </Text>
        <List
          className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[87%]"
          orientation="horizontal"
        >
          <Column className="items-center lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] w-[100%]">
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
          </Column>
          <Column className="items-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[100%]"></div>
          </Column>
          <Column className="items-center lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] w-[100%]">
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
            <div className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"></div>
          </Column>
        </List>
        <Button
          className="font-bold lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[13%]"
          shape="RoundedBorder10"
          variant="FillGray401"
        >
          LOAD MORE
        </Button>
        <Column className="bg-gray_202 lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:p-[49px] xl:p-[56px] p-[64px] 3xl:p-[76px] w-[100%]">
          <Text className="font-bold lg:ml-[380px] xl:ml-[435px] ml-[489px] 3xl:ml-[587px] mt-[4px] lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px] text-black_900 w-[auto]">
            Bamboo Families
          </Text>
          <Row className="items-center justify-center lg:ml-[245px] xl:ml-[281px] ml-[316px] 3xl:ml-[379px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[52%]">
            <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              PRODUCT
            </Text>
            <Text className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              PRODUCT
            </Text>
            <Text className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              PRODUCT
            </Text>
            <Text className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              PRODUCT
            </Text>
          </Row>
          <Line className="bg-gray_601 h-[3px] lg:ml-[557px] xl:ml-[637px] ml-[717px] 3xl:ml-[860px] mt-[3px] w-[5%]" />
          <Img
            src="images/img_group4_gray_601.png"
            className="lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] xl:mb-[112px] mb-[126px] 3xl:mb-[151px] lg:mb-[98px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[99%]"
            alt="GroupFour"
          />
        </Column>
        <footer className="bg-gray_801 w-[100%]">
          <Column className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
            <Row className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:mr-[178px] xl:mr-[203px] mr-[229px] 3xl:mr-[274px] w-[79%]">
              <Row className="items-center justify-between w-[51%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]">
                  SUBSCRIBE TO OUR NEWSLETTER
                </Text>
                <Button
                  className="flex items-center justify-center text-center w-[42%]"
                  rightIcon={
                    <Img
                      src="images/img_arrow.png"
                      className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                      alt="Vector 2"
                    />
                  }
                  shape="RoundedBorder10"
                  variant="FillBluegray901"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] tracking-ls1">
                    Enter Your E-mail Address Here
                  </div>
                </Button>
              </Row>
              <div className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] h-[97px] 2xl:h-[98px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] w-[1px]"></div>
              <Text className="font-bold lg:ml-[178px] xl:ml-[203px] ml-[229px] 3xl:ml-[274px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]">
                JOIN US ON
              </Text>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                onClick={handleNavigate10}
                size="smIcn"
                variant="icbFillIndigo600"
              >
                <Img
                  src="images/img_facebook.png"
                  className="flex items-center justify-center"
                  onClick={handleNavigate10}
                  alt="facebook"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                onClick={handleNavigate3}
                size="smIcn"
                variant="icbFillBlue300"
              >
                <Img
                  src="images/img_twitter.png"
                  className="flex items-center justify-center"
                  onClick={handleNavigate3}
                  alt="twitter"
                />
              </Button>
              <Img
                src="images/img_eye.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="eye"
              />
            </Row>
            <div className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] outline outline-[0.5px] outline-gray_201 w-[1px]"></div>
            <Row className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[73%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 tracking-ls1 w-[auto]">
                TERMS & CODITION POLICY
              </Text>
              <Img
                src="images/img_group2_4.png"
                className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] w-[11%]"
                alt="GroupTwo One"
              />
              <Text className="font-bold lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 w-[auto]">
                © 2019 Bamboo All Rights Reserved
              </Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageTwoPage;
