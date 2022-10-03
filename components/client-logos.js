import AmazonPayIcon from "../assets/AmazonPayIcon";
import ApplePayIcon from "../assets/ApplePayIcon";
import GooglePayIcon from "../assets/GooglePay";
import MasterCardIcon from "../assets/MasterCard";
import PayPalIcon from "../assets/PayPalIcon";
import ShopifyIcon from "../assets/ShopifyIcon";
import VisaIcon from "../assets/VisaIcon";
import ZapierIcon from "../assets/ZapierIcon";
import { BadgeCompany } from "./Badge";
import Image from "next/image";
import venmo from "../assets/venmo-logo.png";
import SliderContainer, { SliderItem } from "./slider";
import WebFlowIcon from "../assets/WebflowIcon";
import BitCoinIcon from "../assets/BitcoinIcon";

const ClientLogos = ({ width = 2000, offset1 = 0, offset2 = 70 }) => {
  return (
    <>
      <SliderContainer
        className=""
        contentWidth={width}
        initialOffsetX={offset1}
      >
        <SliderItem>
          <BadgeCompany>
            <ShopifyIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <GooglePayIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <VisaIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <MasterCardIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <AmazonPayIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <PayPalIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <ApplePayIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <ZapierIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <BitCoinIcon />
          </BadgeCompany>
        </SliderItem>
      </SliderContainer>
      <SliderContainer
        className=""
        contentWidth={width}
        initialOffsetX={offset2}
      >
        <SliderItem>
          <BadgeCompany>
            <AmazonPayIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <GooglePayIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <ShopifyIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <ZapierIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <BitCoinIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <VisaIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <MasterCardIcon />
          </BadgeCompany>
        </SliderItem>

        <SliderItem>
          <BadgeCompany>
            <PayPalIcon />
          </BadgeCompany>
        </SliderItem>
        <SliderItem>
          <BadgeCompany>
            <ApplePayIcon />
          </BadgeCompany>
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;

export const LogosSmall = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        {" "}
        <BadgeCompany bg="bg-white">
          <ShopifyIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <ApplePayIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <PayPalIcon />
        </BadgeCompany>
      </div>
      <div className="flex gap-2">
        {" "}
        <BadgeCompany bg="bg-white">
          <VisaIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <GooglePayIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <VisaIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <MasterCardIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <VisaIcon />
        </BadgeCompany>
      </div>
      <div className="flex gap-2">
        {" "}
        <BadgeCompany bg="bg-white">
          <ZapierIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <AmazonPayIcon />
        </BadgeCompany>
        <BadgeCompany bg="bg-white">
          <BitCoinIcon />
        </BadgeCompany>
      </div>
    </div>
  );
};
