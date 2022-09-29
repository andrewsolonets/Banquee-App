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

const ClientLogos = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={2000} initialOffsetX={0}>
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
      <SliderContainer className="" contentWidth={2000} initialOffsetX={70}>
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
