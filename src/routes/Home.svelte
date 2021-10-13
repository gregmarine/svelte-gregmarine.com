<script>
  import { fade } from 'svelte/transition';

  import IntersectionObserver from '../components/IntersectionObserver.svelte';

  import { dadjokes } from "../stores/stores.js";
</script>
<svelte:head>
  <style>
    .ios body {
      --ion-background-color: #000000;
      --ion-background-color-rgb: 0, 0, 0;

      --ion-text-color: #ffffff;
      --ion-text-color-rgb: 255, 255, 255;
    }

    .md body {
      --ion-background-color: #000000;
      --ion-background-color-rgb: 0, 0, 0;

      --ion-text-color: #ffffff;
      --ion-text-color-rgb: 255, 255, 255;
    }

    .gradient {
      background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    }
  </style>
</svelte:head>

<div in:fade|local>

<!--Hero-->
<div class="pt-24">
  <div
    class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
  >
    <!--Left Col-->
    <div
      class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
    >
      <p class="uppercase tracking-loose w-full">Welcome!</p>
      <h1 class="my-4 text-5xl font-bold leading-tight">
        You've reached the website of Greg Marine
      </h1>
      <p class="leading-normal text-2xl mb-8">
        Zen Technologist 🧘‍♂️ Teller of Dad Jokes 🤣 Motivating a Mentally
        Healthier World 🙌
      </p>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-3/5 py-6 text-center">
      <img
        alt="Greg Marine headshot"
        class="w-full md:w-4/5 z-50"
        src="/img/hero.webp"
      />
    </div>
  </div>
</div>

<!--Header wave-->
<div class="relative -mt-12 lg:-mt-24">
  <svg
    viewBox="0 0 1428 174"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        transform="translate(-2.000000, 44.000000)"
        fill="#FFFFFF"
        fill-rule="nonzero"
      >
        <path
          d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
          opacity="0.100000001"
        />
        <path
          d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
          opacity="0.100000001"
        />
        <path
          d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
          id="Path-4"
          opacity="0.200000003"
        />
      </g>
      <g
        transform="translate(-4.000000, 76.000000)"
        fill="#FFFFFF"
        fill-rule="nonzero"
      >
        <path
          d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
        />
      </g>
    </g>
  </svg>
</div>

<!--Zen-->
<IntersectionObserver>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a
          href="#/zen"
          class="w-full no-underline hover:no-underline">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Zen
        </h1>
      </a>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2
        class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800"
      >
        Subtitle
      </h2>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            The Path to Balance
          </h3>
          <p class="text-gray-600 mb-8">
            Most days I begin my day by building a fresh and unique Zen garden
            design. I conclude my day by resetting the Zen garden to clear my
            mind. Weekdays, I feature my Zen garden on social media along with an
            inspirational quote or motivational statement.
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            alt="Desktop Zen Garden with mini Torii Gate"
            src="/img/zen-1.webp"
          />
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img alt="Desktop Zen Garden with mini tree" src="/img/zen-2.webp" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Connect with the Moment
            </h3>
            <p class="text-gray-600 mb-8">
              My desktop Zen garden often features items I have collected on my
              life's journey. For example, this dish with a tree is a reminder of
              a wonderful trip I took to the Walt Disney World Resort in Central
              Florida.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</IntersectionObserver>

<!--Dad Jokes-->
<IntersectionObserver>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <a
          href="#/dadjokes"
          class="w-full no-underline hover:no-underline">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Dad Jokes
        </h1>
      </a>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2
        class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800"
      >
        Currated List of Eye Rolling Humor
      </h2>

      {#each $dadjokes.slice(0, 3) as dadjoke}
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a
              href="#/dadjokes/{dadjoke.id}"
              class="flex flex-wrap no-underline hover:no-underline"
            >
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                {dadjoke.id}
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                {dadjoke.setup}
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                {dadjoke.punchline}
              </p>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </section>
</IntersectionObserver>

<!--Recipes-->
<IntersectionObserver>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Recipes
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <div
          class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
        >
          <div
            class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="p-8 text-3xl font-bold text-center border-b-4">Free</div>
            <ul class="w-full text-center text-sm">
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
            </ul>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
              £0
              <span class="text-base">for one user</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
        >
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
            <div class="h-1 w-full gradient my-0 py-0 rounded-t" />
            <ul class="w-full text-center text-base font-bold">
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
            </ul>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="w-full pt-6 text-4xl font-bold text-center">
              £x.99
              <span class="text-base">/ per user</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
        >
          <div
            class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="p-8 text-3xl font-bold text-center border-b-4">Pro</div>
            <ul class="w-full text-center text-sm">
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
              <li class="border-b py-4">Thing</li>
            </ul>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
              £x.99
              <span class="text-base">/ per user</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</IntersectionObserver>

<!-- Change the colour #f8fafc to match the previous section colour -->
<svg
  class="wave-top"
  viewBox="0 0 1439 147"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
      <g class="wave" fill="#f8fafc">
        <path
          d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
        />
      </g>
      <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
        <g
          transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
        >
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            opacity="0.200000003"
          />
        </g>
      </g>
    </g>
  </g>
</svg>

<section class="container mx-auto text-center py-6 mb-12">
  <h1
    class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
  >
    Call to Action
  </h1>
  <div class="w-full mb-4">
    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
  </div>
  <h3 class="my-4 text-3xl leading-tight">
    Main Hero Message to sell yourself!
  </h3>
  <button
    class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
  >
    Action!
  </button>
</section>

<!--Footer-->
<footer class="bg-white">
  <div class="container mx-auto px-8">
    <div class="w-full flex flex-col md:flex-row py-6">
      <div class="flex-1 mb-6 text-black">
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg
            class="h-8 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.005 512.005"
          >
            <rect
              fill="#2a2a31"
              x="16.539"
              y="425.626"
              width="479.767"
              height="50.502"
              transform="matrix(1,0,0,1,0,0)"
            />
            <path
              class="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg>
          LANDING
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Links</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            FAQ
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Help
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Support
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Terms
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Privacy
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Social</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Facebook
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Linkedin
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Twitter
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Company</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Official Blog
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            About Us
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Contact
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</div>