import React from "react";

import { Column, Stack, Text, Img, Row } from "components";

const CasestudyPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-opensans items-center mx-[auto] w-[100%]">
        <Stack className="bg-gray_101 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] lg:pl-[101px] xl:pl-[116px] 2xl:pl-[130px] pl-[145px] 3xl:pl-[156px] w-[100%]">
          <Column className="absolute bottom-[28%] items-center left-[0] w-[35%]">
            <Text className="font-normal leading-[normal] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] text-[22px] 3xl:text-[23px] text-black_900 w-[97%]">
              Bamboo is a furnitutre company that provide
              <br />
              quality product to meet your indoor or outdoor <br />
              furniture needs.
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] mt-[38px] 3xl:mt-[41px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] text-[22px] 3xl:text-[23px] text-black_900 w-[100%]">
              Bamboo e-commerce site is a solution that offer
              <br />a simple system that organize different product
              <br />
              where peoples(families, businesses) can intereact
              <br />
              with the product.
            </Text>
          </Column>
          <Stack className="absolute font-merriweather lg:h-[315px] xl:h-[361px] 2xl:h-[406px] h-[450px] 3xl:h-[487px] right-[0] top-[0] w-[79%]">
            <Img
              src="images/img_rectangle2.png"
              className="absolute lg:h-[315px] xl:h-[361px] 2xl:h-[406px] h-[450px] 3xl:h-[487px] right-[0] w-[61%]"
              alt="RectangleTwo"
            />
            <Text className="absolute font-bold left-[0] lg:text-[100px] xl:text-[115px] 2xl:text-[129px] text-[144px] 3xl:text-[155px] text-bluegray_800 top-[10%] w-[auto]">
              casestudy
            </Text>
          </Stack>
          <Img
            src="images/img_rectangle21.png"
            className="absolute bottom-[0] lg:h-[315px] xl:h-[361px] 2xl:h-[406px] h-[450px] 3xl:h-[487px] right-[0] w-[48%]"
            alt="RectangleTwentyOne"
          />
          <Img
            src="images/img_group21_1.png"
            className="absolute lg:h-[33px] xl:h-[38px] 2xl:h-[43px] h-[47px] 3xl:h-[51px] left-[0] top-[5%] w-[12%]"
            alt="GroupTwentyOne"
          />
        </Stack>
        <Column className="bg-bluegray_800 font-merriweather lg:p-[23px] xl:p-[27px] 2xl:p-[30px] p-[34px] 3xl:p-[36px] w-[100%]">
          <Row className="items-center lg:ml-[130px] xl:ml-[148px] 2xl:ml-[167px] ml-[186px] 3xl:ml-[200px] w-[21%]">
            <Img
              src="images/img_group22_23X112.png"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] h-[23px] 3xl:h-[25px] w-[36%]"
              alt="GroupTwentyTwo"
            />
            <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[20px] 3xl:ml-[21px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] text-[36px] 3xl:text-[38px] text-gray_101 w-[auto]">
              Casestudy
            </Text>
          </Row>
          <Text className="font-bold lg:ml-[350px] xl:ml-[401px] 2xl:ml-[451px] ml-[501px] 3xl:ml-[541px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] mt-[7px] 3xl:text-[103px] lg:text-[67px] xl:text-[76px] 2xl:text-[86px] text-[96px] text-gray_101 w-[auto]">
            goal
          </Text>
          <Column className="font-opensans lg:mb-[249px] xl:mb-[285px] 2xl:mb-[320px] mb-[356px] 3xl:mb-[384px] ml-[111px] 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] lg:mr-[313px] xl:mr-[358px] 2xl:mr-[403px] mr-[448px] 3xl:mr-[484px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] mt-[82px] 3xl:mt-[88px] w-[64%]">
            <Row className="items-center w-[81%]">
              <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] text-[24px] 3xl:text-[25px] text-teal_A400 tracking-ls1 w-[auto]">
                SALE SOLUTION
              </Text>
              <Text className="font-bold lg:ml-[275px] xl:ml-[315px] 2xl:ml-[354px] ml-[394px] 3xl:ml-[425px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] text-[24px] 3xl:text-[25px] text-teal_A400 tracking-ls1 w-[auto]">
                PRODUCT HUB
              </Text>
            </Row>
            <Row className="items-center justify-between mt-[3px] w-[100%]">
              <Text className="font-normal leading-[normal] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] text-[22px] 3xl:text-[23px] text-gray_101 w-[41%]">
                The Bamboo E-commerce site provide
                <br />a digital space were digital transaction <br />
                can take place between the buyer and
                <br />
                seller.
              </Text>
              <Text className="font-normal leading-[normal] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] text-[22px] 3xl:text-[23px] text-gray_101 w-[39%]">
                The Platform provide a single source
                <br />
                of truth for all all things furniture to
                <br />
                interested parties and eventually be
                <br />
                converted to a Lead
              </Text>
            </Row>
          </Column>
        </Column>
        <Row className="bg-gray_101 font-merriweather lg:p-[29px] xl:p-[33px] 2xl:p-[37px] p-[42px] 3xl:p-[45px] w-[100%]">
          <Column className="lg:mb-[199px] xl:mb-[228px] 2xl:mb-[256px] mb-[285px] 3xl:mb-[307px] ml-[103px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[92px] lg:pr-[128px] xl:pr-[146px] 2xl:pr-[164px] pr-[183px] 3xl:pr-[197px] w-[55%]">
            <Row className="items-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[67px] ml-[75px] 3xl:ml-[81px] w-[88%]">
              <Img
                src="images/img_group23_23X112.png"
                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] h-[23px] 3xl:h-[25px] w-[19%]"
                alt="GroupTwentyThree"
              />
              <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[20px] 3xl:ml-[21px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] text-[36px] 3xl:text-[38px] text-bluegray_800 w-[auto]">
                Casestudy
              </Text>
              <Text className="font-bold lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] mt-[54px] 3xl:mt-[58px] 3xl:text-[103px] lg:text-[67px] xl:text-[76px] 2xl:text-[86px] text-[96px] text-bluegray_800 w-[auto]">
                traits
              </Text>
            </Row>
            <Column className="lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] mt-[77px] 3xl:mt-[83px] w-[59%]">
              <Text className="font-black lowercase lg:text-[33px] xl:text-[38px] 2xl:text-[43px] text-[48px] 3xl:text-[51px] text-bluegray_800 w-[auto]">
                MODERN/CLASSIC
              </Text>
              <Text className="font-black lowercase lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] mt-[15px] 3xl:mt-[16px] lg:text-[33px] xl:text-[38px] 2xl:text-[43px] text-[48px] 3xl:text-[51px] text-bluegray_800 w-[auto]">
                SIMPLE/GENIUNE
              </Text>
              <Text className="font-black lowercase lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] mt-[15px] 3xl:mt-[16px] lg:text-[33px] xl:text-[38px] 2xl:text-[43px] text-[48px] 3xl:text-[51px] text-bluegray_800 w-[auto]">
                EARTHLY
              </Text>
            </Column>
          </Column>
          <Stack className="lg:h-[529px] xl:h-[605px] 2xl:h-[680px] h-[755px] 3xl:h-[816px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] my-[30px] 3xl:my-[32px] w-[36%]">
            <Stack className="absolute lg:h-[280px] xl:h-[320px] 2xl:h-[360px] h-[399px] 3xl:h-[432px] left-[0] top-[13%] w-[67%]">
              <Img
                src="images/img_product12.png"
                className="absolute lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] left-[0] top-[0] w-[67%]"
                alt="RectangleThree"
              />
              <Img
                src="images/img_rectangle31.png"
                className="absolute bottom-[0] lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] right-[0] w-[67%]"
                alt="RectangleThirtyOne"
              />
            </Stack>
            <Img
              src="images/img_rectangle32.png"
              className="absolute lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] right-[0] top-[0] w-[44%]"
              alt="RectangleThirtyTwo"
            />
            <Img
              src="images/img_group4.png"
              className="absolute bottom-[0] lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] left-[4%] w-[44%]"
              alt="RectangleThirtyFour"
            />
            <Img
              src="images/img_product1.png"
              className="absolute bottom-[10%] lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] right-[0] w-[44%]"
              alt="RectangleThirtyFive"
            />
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default CasestudyPage;
