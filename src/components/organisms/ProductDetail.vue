<template>
    <div v-if="base"
        class="flex flex-col pb-10 gap-9">
        <div class="flex items-center justify-end gap-4">
            <CodeAtom :code="code" />
            <a href="#">
                <ShareAtom size="sm" color="#AFACA9" />
            </a>
        </div>
        <div class="flex gap-6">
            <div class="flex flex-1 gap-8">
                <div class="w-5/12 h-[600px]">
                    <ImageAtom class="flex" :src="imageSrc" type="center" >
                        <div class="mt-1 ml-auto mr-1">
                            <SaleAtom size="lg" :text="saleText" />
                        </div>
                    </ImageAtom>
                </div>
                <div class="flex flex-col flex-1">
                    <div class="flex mt-2">
                        <NameMolecule 
                            :heading="h2Title"
                            :linkAtom="ratingLink"
                            size="base"
                            starColor="#FF9635" />
                    </div>
                    <div class="mt-8">
                        <DescriptionMolecule size="base" :text="descriptionText" />
                    </div>
                    <div class="mt-3 w-[120px]">
                        <ButtonAtom type="outline" size="sm" :text="buttonText" />
                    </div>
                    <BorderAtom 
                        class="mt-5" 
                        size="lg" 
                        color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                    <ActionAtom class="mt-5" size="base" icon="info" :text="actionText" />
                    <BorderAtom 
                        class="mt-5" 
                        size="lg" 
                        color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                    <HeadingAtom class="mt-5" tag="h3" :title="h3Title" size="sm" />
                    <ExpertAtom class="mt-4" size="lg" :text="expertText.lg" />
                </div>
            </div>
            <div class="flex flex-col max-w-[336px] min-w-[316px] flex-1">
                <OfferBoxMolecule :priceAtom="offerPrice" />
            </div>
        </div>
    </div>
    <div v-if="sm"
        class="flex flex-col pb-10 gap-9">
        <div class="flex items-center justify-end gap-4">
            <CodeAtom :code="code" />
            <a href="#">
                <ShareAtom size="sm" color="#AFACA9" />
            </a>
        </div>
        <div class="flex">
            <div class="flex flex-1 min-w-[612px]">
                <div class="w-full h-[600px]">
                    <ImageAtom class="flex" :src="imageSrc" type="center" >
                        <div class="mt-1 ml-auto mr-1">
                            <SaleAtom size="lg" :text="saleText" />
                        </div>
                    </ImageAtom>
                </div>
            </div>
            <div class="min-w-[40px] max-w-[80px] flex flex-1"></div>
            <div class="flex flex-col max-w-[384px] min-w-[316px] flex-1">
                <div class="flex flex-col flex-1">
                    <div class="flex mt-[10px]">
                        <NameMolecule 
                            :heading="h2Title"
                            :linkAtom="ratingLink"
                            size="sm"
                            starColor="#FF9635" />
                    </div>
                    <OfferBoxMolecule class="mt-[34px]" :priceAtom="offerPrice" />
                    <div class="mt-8">
                        <DescriptionMolecule size="sm" :text="descriptionText" />
                    </div>
                    <div class="mt-3 w-[120px]">
                        <ButtonAtom type="outline" size="sm" :text="buttonText" />
                    </div>
                    <BorderAtom 
                        class="mt-5" 
                        size="lg" 
                        color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                    <ActionAtom class="mt-5" size="base" icon="info" :text="actionText" />
                    <BorderAtom 
                        class="mt-5" 
                        size="lg" 
                        color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                    <HeadingAtom class="mt-5" tag="h3" :title="h3Title" size="sm" />
                    <ExpertAtom class="mt-4" size="lg" :text="expertText.lg" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="xs"
        class="flex flex-col gap-3">
        <div class="w-full px-4 justify-center items-center flex flex-col h-full min-w-[288px] min-h-[288px] max-w-[991px] max-h-[600px]">
            <ImageAtom :src="imageSrc" :type="imageType" >
                <div class="mt-auto">
                    <SaleAtom size="base" :text="saleText" />
                </div>
            </ImageAtom>
        </div>
        <div class="flex flex-col flex-1 gap-2 pb-10 bg-grey-100">
            <div class="flex flex-col flex-1 px-4 bg-white rounded-lg">
                <div class="flex mt-[6px] flex-col">
                    <NameMolecule 
                        :heading="h2Title"
                        :linkAtom="ratingLink"
                        size="xs"
                        starColor="#FF9635" />
                    <PriceAtom class="mt-[18px]" :type="offerPrice.type" :price="offerPrice.price" size="base" />
                    <CodeAtom class="mt-6 ml-auto" :code="code" />
                    <ButtonAtom class="mt-3" size="base" type="primary" text="Добавить в корзину" />
                    <ButtonAtom class="mt-2" size="base" type="outline" text="Добавить в список" />
                    <MediaMolecule class="mt-6" />
                </div>
            </div>
            <div class="flex flex-col flex-1 px-4 py-6 bg-white rounded-lg">   
                <HeadingAtom size="2xl" tag="h3" title="О товаре" /> 
                <div class="mt-4">
                    <DescriptionMolecule size="xs" :text="descriptionText" />
                </div>
                <div class="mt-3 w-[120px]">
                    <ButtonAtom type="outline" size="sm" :text="buttonText" />
                </div>
                <BorderAtom 
                    class="mt-5" 
                    size="base" 
                    color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                <ActionAtom class="mt-5" size="sm" icon="info" :text="actionText" />
                <BorderAtom 
                    class="mt-5" 
                    size="base" 
                    color="linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)" />
                <HeadingAtom class="mt-5" tag="h3" :title="h3Title" size="sm" />
                <div>
                    <ExpertAtom class="mt-3" size="sm" :text="expertText.sm" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeAtom from "../atoms/badges/Code.vue";
    import ImageAtom from "../atoms/images/Image.vue";
    import SaleAtom from "../atoms/badges/Sale.vue";
    import ShareAtom from "../atoms/icons/Share.vue";
    import HeadingAtom from "../atoms/headings/Heading.vue";
    import StarAtom from "../atoms/icons/Star.vue";
    import LinkAtom from "../atoms/links/Link.vue";
    import DescriptionMolecule from "../Molecules/info/Description.vue";
    import ButtonAtom from "../atoms/buttons/Button.vue";
    import BorderAtom from "../atoms/borders/Border.vue";
    import ActionAtom from "../atoms/badges/Action.vue";
    import ExpertAtom from "../atoms/badges/Expert.vue";
    import OfferBoxMolecule from "../Molecules/OfferBox.vue";
    import NameMolecule from "../Molecules/info/Name.vue";
    import PriceAtom from "../atoms/prices/Price.vue";
    import MediaMolecule from "../Molecules/Media.vue";

    export default {
        name: "ProductDetail",
        props: {
            saleText: String,
            imageSrc: String,
            code: String,
            h2Title: String,
            h3Title: String,
            ratingLink: Object,
            descriptionText: String,
            buttonText: String,
            actionText: String,
            expertText: Object,
            offerPrice: Object
        },
        components: {
            CodeAtom,
            ImageAtom,
            SaleAtom,
            ShareAtom,
            HeadingAtom,
            StarAtom,
            LinkAtom,
            DescriptionMolecule,
            ButtonAtom,
            BorderAtom,
            ActionAtom,
            ExpertAtom,
            OfferBoxMolecule,
            NameMolecule,
            PriceAtom,
            MediaMolecule
        }, 
        data() {
            return {
                base: false,
                sm: false,
                xs: false,
                imageType: String
            };
        },
        methods: {
            handleView() {
                if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
                    this.xs = true;
                    this.sm = false;
                    this.base = false;
                } else if (window.innerWidth >= 1024 && window.innerWidth <= 1199) {
                    this.sm = true;
                    this.base = false;
                    this.xs = false;
                } else if (window.innerWidth >= 1200) {
                    this.base = true;
                    this.sm = false;
                    this.xs = false;
                } else {
                    this.base = false;
                    this.sm = false;
                    this.xs = false;
                }

                if (window.innerWidth >= 633 && window.innerWidth <= 1023) {
                    this.imageType = 'center'
                } else if (window.innerWidth >= 320 && window.innerWidth <= 632) {
                    // this.imageType = 'scale'
                    this.imageType = 'center'
                }
            }
        },
        created() {
            this.handleView();
            window.addEventListener("resize", this.handleView);
        },
        destroyed() {
            window.removeEventListener("resize", this.handleView);
        }
    }
</script>
