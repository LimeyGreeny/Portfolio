<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/LimeyGreeny"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Facebook"
        link="https://www.facebook.com/Wheign.De.Guzman/"
        icon="ant-design:facebook-outlined"
      />
    </div>
    <ActionButton link="mailto:kedriechpablo@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
