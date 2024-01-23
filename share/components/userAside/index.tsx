import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const UserAside = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const isProfilePage = router.asPath.includes('?page=profile');
  const isBasketPage = router.asPath.includes('?page=basket');
  const isOrdersPage = router.asPath.includes('?page=orders');
  const isCheckoutPage = router.asPath.includes('?page=checkout');

  return (
    <div className="rounded-md flex flex-col max-h-screen overflow-y-auto gap-8 bg-whiteLight1 w-1/6 p-4">
      <div className={`flex items-center gap-4 cursor-pointer hover:bg-${isProfilePage ? 'mainRedLight' : ''} transition-all p-2`}>
        <Image width={25} height={0} src={'profile.svg'} alt="profileIcon" />
        <p className="font-semibold text-grayText2 text-lg ">{t('userDesc')}</p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer hover:bg-${isBasketPage ? 'mainRedLight' : ''} transition-all p-2`}>
        <Image width={25} height={0} src={'basketIcon.svg'} alt="basketIcon" />
        <p className="font-semibold text-grayText2 text-lg ">{t('userDesc2')}</p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer hover:bg-${isOrdersPage ? 'mainRedLight' : 'whiteLight1'} transition-all p-2`}>
        <Image width={25} height={0} src={'order.svg'} alt="orderIcon" />
        <p className="font-semibold text-grayText2 text-lg ">{t('userDesc3')}</p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer hover:bg-${isCheckoutPage ? 'mainRedLight' : 'whiteLight1'} transition-all p-2`}>
        <Image width={25} height={0} src={'checkout.svg'} alt="checkoutIcon" />
        <p className="font-semibold text-grayText2 text-lg ">{t('userDesc4')}</p>
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-mainRedLight transition-all p-2">
        <Image width={25} height={0} src={'logout.svg'} alt="logoutIcon" />
        <p className="font-semibold text-grayText2 text-lg ">{t('userDesc5')}</p>
      </div>
    </div>
  );
};
