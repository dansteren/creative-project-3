<template>
  <div class="home-page-container">
    <h1>Home Page</h1>
    <input type="checkbox" v-model="editing" />
    <editing-profile v-if="editing"></editing-profile>
    <div v-else>
      <div id="cardHolder">
        <div id="upperHalf">
          <!-- {{ user.imageUrl }} -->
          <div id="textHolder">
            <p>{{ user.name }}</p>
            <p>{{ user.occupation }} in {{user.city}}, {{user.state}}</p>
          </div>
        </div>
        <div id="lowerHalf">
          <a :href="user.websiteUrl">Visit my website</a>
          <p>{{ user.tagline }}</p>
          <p>{{ user.bio }}</p>
        </div>
      </div>
    </div>
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
        imageUrl: '/static/images/cloud.jpg',
        name: 'Manuel',
        occupation: 'Student',
        city: 'Provo',
        state: 'UT',
        websiteUrl: 'cs260.manuelmarquezse.com',
        tagline: 'Computer lover',
        bio: 'Everything is awesome'
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

#cardHolder {
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 5px #616161;
}

#upperHalf {
  height: 300px;
  background-image: url('/static/images/cloud.jpg');
  background-size: cover;
  /* background-repeat: no-repeat; */
  display: flex;
  flex-direction: column;
}

#textHolder {
}

#lowerHalf {
  display: flex;
  flex-direction: column;
}

#lowerHalf a {
  border-color: black;
  border-width: 2px;
  border-style: solid;
  padding: 7px;
  border-radius: 4px;
}
</style>
