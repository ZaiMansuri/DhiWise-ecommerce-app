import React from "react";

import { Column, Row, Img, Line, Text, Button, List } from "components";

const ProductDetailTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-interui mx-[auto] overflow-auto lg:pl-[39px] xl:pl-[45px] pl-[51px] 3xl:pl-[61px] lg:py-[39px] xl:py-[45px] py-[51px] 3xl:py-[61px] w-[100%]">
        <Column className="items-center lg:pr-[182px] xl:pr-[208px] pr-[234px] 3xl:pr-[280px] w-[100%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_menu_gray_801.png"
              className="lg:h-[28px] xl:h-[32px] h-[35px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
              alt="menu"
            />
            <Img
              src="images/img_group3_1.png"
              className="lg:h-[116px] xl:h-[132px] h-[148px] 2xl:h-[149px] 3xl:h-[178px] lg:ml-[381px] xl:ml-[435px] ml-[490px] 3xl:ml-[588px] w-[14%]"
              alt="GroupThree"
            />
            <Img
              src="images/img_search_gray_801.png"
              className="lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] lg:w-[38px] xl:w-[43px] w-[49px] 3xl:w-[58px]"
              alt="search"
            />
            <Img
              src="images/img_cart_gray_801.png"
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="cart"
            />
          </Row>
          <Row className="items-center lg:mt-[102px] xl:mt-[117px] mt-[132px] 3xl:mt-[158px] w-[96%]">
            <Line className="bg-black_900 h-[3px] w-[5%]" />
            <div className="bg-gray_401 lg:h-[467px] xl:h-[534px] h-[600px] 2xl:h-[601px] 3xl:h-[721px] lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] rounded-radius10 w-[37%]"></div>
            <Column className="lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] w-[48%]">
              <Row className="justify-between w-[100%]">
                <Line className="bg-black_900 h-[3px] lg:mb-[116px] xl:mb-[133px] mb-[150px] 3xl:mb-[180px] lg:mt-[245px] xl:mt-[281px] mt-[316px] 3xl:mt-[379px] rotate-[180deg] w-[11%]" />
                <Column className="w-[84%]">
                  <Row className="items-center justify-between ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[98%]">
                    <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-bluegray_902 w-[auto]">
                      Name
                    </Text>
                    <Text className="font-bold italic lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-bluegray_902 w-[auto]">
                      350 $
                    </Text>
                  </Row>
                  <Text className="font-bold lg:mt-[283px] xl:mt-[324px] mt-[365px] 3xl:mt-[438px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 tracking-ls1 w-[auto]">
                    COLOR
                  </Text>
                </Column>
              </Row>
              <Row className="items-center 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] ml-[92px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[15%]">
                <div className="bg-gray_401 lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius50 lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"></div>
                <div className="bg-gray_801 lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] rounded-radius50 lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"></div>
                <div className="bg-gray_401 lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] rounded-radius50 lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"></div>
              </Row>
              <Row className="lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] w-[82%]">
                <Text className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[4px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-bluegray_902 w-[auto]">
                  QTY
                </Text>
                <Button
                  className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center w-[21%]"
                  shape="RoundedBorder10"
                  variant="FillGray401"
                >
                  - 01 +
                </Button>
                <Button
                  className="font-bold lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center tracking-ls1 w-[58%]"
                  shape="RoundedBorder10"
                  variant="FillGray401"
                >
                  ADD TO CART
                </Button>
              </Row>
            </Column>
          </Row>
          <Text className="font-bold lg:mt-[137px] xl:mt-[157px] mt-[177px] 3xl:mt-[212px] lg:text-[46px] xl:text-[53px] text-[60px] 3xl:text-[72px] text-black_900 w-[auto]">
            Related Product
          </Text>
        </Column>
        <Column className="items-end lg:mb-[150px] xl:mb-[172px] mb-[194px] 3xl:mb-[232px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:pl-[40px] xl:pl-[46px] pl-[52px] 3xl:pl-[62px] w-[100%]">
          <Row className="items-center justify-between w-[100%]">
            <List
              className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] w-[48%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_201 border-bw5 border-gray_400 border-solid items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Name
                </Text>
                <Row className="items-center justify-center lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[13%]">
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Row>
                <Text className="font-medium mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Price
                </Text>
              </Column>
              <Column className="bg-gray_201 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Name
                </Text>
                <Row className="items-center justify-center lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[13%]">
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Row>
                <Text className="font-medium mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Price
                </Text>
              </Column>
            </List>
            <List
              className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] w-[48%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_201 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Name
                </Text>
                <Row className="items-center justify-center lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[21%]">
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Row>
                <Text className="font-medium lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Price
                </Text>
              </Column>
              <Column className="bg-gray_201 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Name
                </Text>
                <Row className="items-center justify-center lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[21%]">
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                  <div className="bg-gray_904 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Row>
                <Text className="font-medium lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]">
                  Price
                </Text>
              </Column>
            </List>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ProductDetailTwoPage;
