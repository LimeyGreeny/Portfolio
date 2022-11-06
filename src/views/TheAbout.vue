<template>
  <div class="flex flex-col gap-8">
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Greetings Everyone!, I'm Roweign Kedriech D. Pablo, 4th year Bachelor of
      Science in Information Technology Student from PHINMA - University of
      Pangasinan. and My skills is
      <LinkBtn>Visual Studio Code</LinkBtn>, <LinkBtn>HTML & CSS</LinkBtn>,
      <LinkBtn>Vue</LinkBtn>, <LinkBtn>Tailwind</LinkBtn>,
      <LinkBtn>Bootstrapping</LinkBtn>, <LinkBtn>Python</LinkBtn>,
      <LinkBtn>Java</LinkBtn>, <LinkBtn>JavaScript</LinkBtn>,
      <LinkBtn>Adobe Photoshop</LinkBtn>, <LinkBtn>Adobe Premier Pro</LinkBtn> ,
      <LinkBtn>Adobe Illustrator</LinkBtn>, <LinkBtn>Adobe XD</LinkBtn>, and
      <LinkBtn>Adobe Adution</LinkBtn>. But I also tried developing for Desktop,
      Web system, and Games. <br /><br />When I was a kid, I was notice my
      brother using his laptop doing his project and he show me a wonderful
      knowledge about using Computer that they have Games, Videos, And Specially
      coding. it gives me inspired to be a progammer to make my very own
      Website, Video Editing, and Especially Games!.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      If you want to check my Curriculum Vitae ->
      <LinkBtn
        target="_blank"
        href="/Portfolio/src/assets/featured/kedriech-pablo-cv.pdf"
        >Download CV</LinkBtn
      >
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-2 lg:gap-4">
      <h3 class="font-theme_bold text-head_text text-3xl">My Education</h3>
      <div
        class="grid grid-cols-1 slg:grid-cols-1 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
      >
        <a
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 gap-8 rounded-md bg-item_back transition-colors border-[1px] border-border_sm"
          ><div class="flex flex-col justify-between gap-4 slg:gap-5">
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >Primary:</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >Cherished Moment School, Mangaldan, Pangasinan</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >2006 - 2013</span
            >
          </div></a
        >
        <a
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back transition-colors border-[1px] border-border_sm"
          ><div class="flex flex-col justify-between gap-4 slg:gap-5">
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >Secondary:</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >Santo Tomas Catholic School, Mangaldan, Pangasinan</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >2013 - 2019</span
            >
            <p class="text-sm md:text-base">
              Founded in 1948, is one of the Catholic schools of the archdiocese
              of Lingayen -Dagupan. It is called to help initiate and sustain
              Catholic Christian environment that leavens the world with
              Christian values that would help transform families and society.
              In unity, solidarity and coordination with other evangelizing
              entities, STCS works for the restructuring and revitalizing of
              families, communities and the society to become a Catholic
              environment, thereby constituting the Living Body of Christ.
            </p>
          </div></a
        >
        <a
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back transition-colors border-[1px] border-border_sm"
          ><div class="flex flex-col justify-between gap-4 slg:gap-5">
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >Tertiary:</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >PHINMA University of Pangasinan BS Information Technology,
              Dagupan City</span
            >
            <span class="font-theme_bold text-lg text-head_text slg:text-xl"
              >2019 - 2023</span
            >
            <p class="text-sm md:text-base">
              The PHINMA – University of Pangasinan, also known as UPang, is a
              private and non-sectarian university located at Dagupan,
              Pangasinan, Philippines. It is a member of the PHINMA Education
              Network. It offers practically all undergraduate and graduate
              courses that Metro Manila universities offer.
            </p>
          </div></a
        >
      </div>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-2 lg:gap-4">
      <h3 class="font-theme_bold text-head_text text-3xl">My Certificate</h3>
      <div
        class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
      >
        <a
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 gap-8 rounded-md bg-item_back transition-colors border-[1px] border-border_sm"
          ><div class="flex flex-col justify-between gap-4 slg:gap-5">
            <img
              class="rounded-lg"
              src="../assets/imgs/dsc-cerficate.jpg"
            /></div
        ></a>
        <a
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 gap-8 rounded-md bg-item_back transition-colors border-[1px] border-border_sm"
          ><div class="flex flex-col justify-between gap-4 slg:gap-5">
            <img
              class="rounded-lg"
              src="../assets/imgs/firebase-certificate.jpg"
            /></div
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
import LinkBtn from "../components/ui/LinkBtn.vue";
</script>
