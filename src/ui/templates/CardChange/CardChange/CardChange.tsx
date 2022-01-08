import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import Modal from "react-modal";
import {
  CardChangeLayout,
  ButtonLayout,
  Card,
  Textset,
  Text,
  IconLayout,
  RefreshDiv,
  Confirmdiv,
  ConfirmButton,
  SplitLine,
  TextDetail,
  Row,
  MainLayout,
  SettingLayout,
  TitleLayout,
  BackIconLayout,
  TitleText,
  SelectItem,
  SelectLayout,
  SelectItemList,
  SelectTitle,
  DeadlineLayout,
  DeadlineTitle,
  DataInput,
  Unit,
  DeadlineItemLayout,
  ExportLayout,
  ExportText,
  OrderHeader,
  OrderLayout,
  IconTextPair,
  AmountText,
  TextLayout,
  TextDetailLayout,
  ButLayout,
  ModalCloseLayout,
  ModalLayout,
  EtherscanButton,
} from "./CardChange.styled";
import { Binance, Button } from "assets/icon";
import { CardSelector } from "ui/elements/CardSelector";
import { Down, Refresh, Help, BUSD, USDC, Back, Close } from "assets/icon";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "320px",
    height: "448px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    padding: "24px 24px 32px",
    background: "#23242F",
    borderRadius: "24px",
    overflow: "hidden",
    outline: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
const CardChange = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [issetting, setIsSetting] = useState(false);
  const [fromInput, setFromInput] = useState(0);
  const [toInput, setToInput] = useState(0);
  const [isOrder, setIsOrder] = useState(false);

  const [active, setActive] = useState(false);

  useEffect(() => {
    var num: number = +(fromInput * 1.0005).toFixed(5);
    if (num == 0) {
      setActive(true);
    } else {
      setActive(false);
    }
    setToInput(num);
  }, [fromInput]);

  useEffect(() => {
    var num: number = +(toInput / 1.0005).toFixed(2);
    if (num == 0) {
      setActive(true);
    } else {
      setActive(false);
    }
    setFromInput(num);
  }, [toInput]);
  const clickorder = () => {
    if (!active) {
      setIsOrder(true);
    }
  };

  const [successModal, setSuccessModal] = useState(false);
  return (
    <CardChangeLayout>
      {!issetting ? (
        isOrder ? (
          <OrderLayout>
            <OrderHeader>
              <Row>
                <BackIconLayout onClick={() => setIsOrder(false)}>
                  <Back />
                </BackIconLayout>
                <TitleText>Select Amount</TitleText>
              </Row>
              <ButtonLayout onClick={() => setIsSetting(true)}>
                <Button.Setting />
              </ButtonLayout>
            </OrderHeader>
            <Textset>
              <Text color="#8B8CA7">You Pay</Text>
            </Textset>
            <IconTextPair>
              <AmountText>320</AmountText>
              <Binance />
            </IconTextPair>
            <Textset>
              <Text color="#8B8CA7">You Receive</Text>
            </Textset>
            <IconTextPair>
              <AmountText>320.16</AmountText>
              <USDC />
            </IconTextPair>
            <TextLayout>
              <Text color="#8B8CA7">
                Output is estimated. You will recei at least 317.90 USDC or the
                transaction will revert
              </Text>
            </TextLayout>
            <TextDetailLayout>
              <TextDetail>
                <Row>
                  <Text color="#8B8CA7">Price</Text>
                </Row>
                <Row>
                  <Text color="#8B8CA7">1.000 BUSD per 1USDC</Text>
                  <Refresh />
                </Row>
              </TextDetail>
              <TextDetail>
                <Row>
                  <Text color="#8B8CA7">Minimum received</Text>
                  <Help></Help>
                </Row>
                <Row>
                  <Text color="white">317.90</Text>
                  <Text color="white">{" " + "USDC"}</Text>
                </Row>
              </TextDetail>
              <TextDetail>
                <Row>
                  <Text color="#8B8CA7">Price Impact</Text>
                  <Help></Help>
                </Row>
                <Text color="white">{"<0.01%"}</Text>
              </TextDetail>
              <TextDetail>
                <Row>
                  <Text color="#8B8CA7">Liquidity Provider Fee</Text>
                  <Help></Help>
                </Row>
                <Row>
                  <Text color="white">3.2 </Text>
                  <Text color="white">{" " + "BUSD"}</Text>
                </Row>
              </TextDetail>
            </TextDetailLayout>
            <ButLayout onClick={() => setSuccessModal(true)}>Confirm</ButLayout>
            <Modal
              isOpen={successModal}
              contentLabel="ChooseWallet"
              style={customStyles}
              ariaHideApp={false}
            >
              <ModalCloseLayout onClick={() => setSuccessModal(false)}>
                <Close />
              </ModalCloseLayout>
              <ModalLayout>
                <EtherscanButton>View on Etherscan</EtherscanButton>
                <Text color="#8B8CA7">Exchanging 320 BUSD for 320.16 USDC</Text>
                <Text color="white">Transaction Submitted</Text>
              </ModalLayout>
            </Modal>
          </OrderLayout>
        ) : (
          <MainLayout>
            <ButtonLayout onClick={() => setIsSetting(true)}>
              <Button.Setting />
            </ButtonLayout>
            <Card>
              <Textset>
                <Text color="#8B8CA7">Pay</Text>
                <Text color="#8B8CA7">Available: 500</Text>
              </Textset>
              <CardSelector
                icon={BUSD}
                text="BUSD"
                value={fromInput}
                getvalue={setFromInput}
              ></CardSelector>
            </Card>
            <IconLayout>
              <Down />
            </IconLayout>
            <Card>
              <Textset>
                <Text color="#8B8CA7">Receive (Estimated)</Text>
                <Text color="#8B8CA7">Available: 1,200</Text>
              </Textset>
              <CardSelector
                icon={USDC}
                text="USDC"
                value={toInput}
                getvalue={setToInput}
              ></CardSelector>
            </Card>

            <RefreshDiv>
              <Text color="#8B8CA7">1 BUSD = 1.0005 USDC</Text>
              <Refresh />
            </RefreshDiv>
            <Confirmdiv>
              <ConfirmButton active={active} onClick={clickorder}>
                Confirm Order
              </ConfirmButton>
              {active ? (
                <Text color="#8B8CA7">
                  Enter an amount to see more trading details
                </Text>
              ) : (
                <></>
              )}
            </Confirmdiv>
            <SplitLine></SplitLine>

            {active ? (
              <TextDetail>
                <Row>
                  <Text color="#8B8CA7">Trade Minting</Text>
                  <Help></Help>
                </Row>
                <Row>
                  <Text color="white">Max Reward 5.04 DEX</Text>
                  <Text color="#53F3C3">$16.68</Text>
                </Row>
              </TextDetail>
            ) : (
              <>
                <TextDetail>
                  <Row>
                    <Text color="#8B8CA7">Slippage Tolerance</Text>
                    <Help></Help>
                  </Row>
                  <Text color="white">3%</Text>
                </TextDetail>
                <TextDetail>
                  <Row>
                    <Text color="#8B8CA7">Minimum Received</Text>
                    <Help></Help>
                  </Row>
                  <Row>
                    <Text color="white">
                      {+(toInput - 2.26).toFixed(2) < 0
                        ? 0
                        : +(toInput - 2.26).toFixed(2)}
                    </Text>
                    <Text color="white">{" " + "USDC"}</Text>
                  </Row>
                </TextDetail>
              </>
            )}
          </MainLayout>
        )
      ) : (
        <SettingLayout>
          <TitleLayout>
            <BackIconLayout onClick={() => setIsSetting(false)}>
              <Back />
            </BackIconLayout>
            <TitleText>Exchange Settings</TitleText>
          </TitleLayout>
          <SelectLayout>
            <SelectTitle>Slippage Tolerance</SelectTitle>
            <SelectItemList>
              <SelectItem>0.5%</SelectItem>
              <SelectItem>1%</SelectItem>
              <SelectItem>3%</SelectItem>
              <DataInput defaultValue={1.5} type={"number"}></DataInput>
              <Unit>%</Unit>
            </SelectItemList>
          </SelectLayout>
          <DeadlineLayout>
            <DeadlineTitle>Transaction Deadline</DeadlineTitle>
            <DeadlineItemLayout>
              <DataInput defaultValue={20} type={"number"}></DataInput>
              <Unit>Min</Unit>
            </DeadlineItemLayout>
          </DeadlineLayout>
          <ExportLayout>
            <ExportText>Expert Mode</ExportText>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
              onColor="#86d3ff"
              offColor="#3B3C4E"
              onHandleColor="#2693e6"
              handleDiameter={24}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={32}
              width={64}
            />
          </ExportLayout>
        </SettingLayout>
      )}
    </CardChangeLayout>
  );
};
export default CardChange;
