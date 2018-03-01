<template>
  <div class="home-page-container">
    <h1>Home Page</h1>
    <editing-profile v-if="editing"></editing-profile>
    <div v-else>
      Final Display
      <p>Hi my name is {{name}}</p>
    </div>
    <input type="checkbox" v-model="editing" />
  </div>
</template>

<script>
import EditingProfile from '@/components/EditingProfile';
export default {
  name: 'HomePage',
  components: { EditingProfile },
  data() {
    return {
      editing: true,
      user: {
        imageUrl: '',
        name: '',
        city: '',
        state: '',
        tagline: '',
        occupation: '',
        bio: '',
        websiteUrl: ''
      }
    };
  }
};
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}
</style>
