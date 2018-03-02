<template>
  <div class="home-page-container">
    <h1>Home Page</h1>
    <input type="checkbox" v-model="editing" />
    <editing-profile v-if="editing" :person="user" v-on:finish="update"></editing-profile>
    <div v-else>
      <div id="cardHolder">
        <div id="upperHalf">
          <img :src="user.imageUrl">
          <div id="textHolder">
            {{ user.name }}
            <br/>
            {{ user.occupation }} in {{user.city}}, {{user.state}}
          </div>
        </div>
        <hr/>
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
        imageUrl: '',
        name: '',
        occupation: '',
        city: '',
        state: '',
        websiteUrl: '',
        tagline: '',
        bio: ''
      }
    };
  },
  methods: {
    update(user) {
      this.user = user;
      this.editing = false;
    }
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

#upperHalf img {
  border: 1px solid black;
  width: 80%;
  margin: 25px 0px 15px 0px;
  box-shadow: 0px 1px 5px #616161;
}

#textHolder {
  font-family: 'Karma', serif;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 2px;
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
  margin: 15px auto 0px auto;
  text-decoration: none;
  color: black;
}
</style>
