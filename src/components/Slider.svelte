<section class="flex flex-col md:flex-row">
  <img class="md:max-w-[60%] max-h-[600px] w-full object-cover" src={heroItems[activeItem].images.desktop} alt="">
  <div class="flex flex-col flex-grow relative items-center justify-center py-12 px-7 pb-20">
    <div class="max-w-[490px] md:max-w-[410px] w-full flex flex-col items-start gap-5">
      <h1 class="text-3xl xl:text-[44px] leading-10 font-bold text-balance tracking-tighter">{heroItems[activeItem].title}</h1>
      <p class="text-pretty text-cc-gray text-sm lg:text-base">{heroItems[activeItem].description}</p>
      <a href="/" class="flex gap-3 hover:text-cc-gray items-center tracking-[10px] uppercase duration-200">
        <p class="pt-1 font-semibold">shop now</p>
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fill-rule="nonzero">            
          </path>
        </svg>
      </a>
    </div>
    
    <div class="flex absolute -top-14 right-0 md:left-0 md:bottom-0 md:top-auto">
      <button on:click={() => prevItem()} class="flex justify-center items-center size-14 xl:size-20 bg-black hover:bg-cc-very-dark text-cc-gray duration-200" aria-label="previous">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="currentColor" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <button on:click={() => nextItem()} class="flex justify-center items-center size-14 xl:size-20 bg-black hover:bg-cc-very-dark text-cc-gray duration-200" aria-label="next">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="currentColor" fill="none" fill-rule="evenodd"/></svg>
      </button>
    </div>
  </div>
</section>

<script>
  let activeItem = 0;

  let heroItems = [
    {
      title: "Discover innovatives ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      images: {
        desktop: "./hero-images/desktop-image-hero-1.jpg",
        mobile: "./hero-images/mobile-image-hero-1.jpg",
      }
    },
    {
      title: "We are available all across the globe",
      description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      images: {
        desktop: "./hero-images/desktop-image-hero-2.jpg",
        mobile: "./hero-images/mobile-image-hero-2.jpg",
      }
    },
    {
      title: "Manufactured with the best materials",
      description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      images: {
        desktop: "./hero-images/desktop-image-hero-3.jpg",
        mobile: "./hero-images/mobile-image-hero-3.jpg",
      }
    },
  ];

  function nextItem() {
    if (activeItem == heroItems.length -1) {
      activeItem = 0;
    } else {
      activeItem++;
    }
  }

  function prevItem() {
    if (activeItem == 0) {
      activeItem = heroItems.length -1;
    } else {
      activeItem--;
    }
  }

</script>