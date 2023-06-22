<template>
  <h1>Update User</h1>
  <div>
    <section class="">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" class="img-fluid" style="
                      border-top-left-radius: 0.25rem;
                      border-bottom-left-radius: 0.25rem;
                    " />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">
                      Update Student registration form
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input v-model="userData.user.id" type="text" id="form3Example1m"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1m">ID</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input v-model="userData.user.firstName" type="text" id="form3Example1n"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1n">First Name</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input v-model="userData.user.email" type="text" id="form3Example1m1"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1m1">Email</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input v-model="userData.user.city" type="text" id="form3Example1n1"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1n1">City</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="userData.user.address" type="text" id="form3Example8"
                        class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example8">Address</label>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 class="mb-0 me-4">Gender:</h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input v-model="userData.user.gender" class="form-check-input" type="radio"
                          name="inlineRadioOptions" id="femaleGender" value="female" />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input v-model="userData.user.gender" class="form-check-input" type="radio"
                          name="inlineRadioOptions" id="maleGender" value="male" />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <input v-model="userData.user.gender" class="form-check-input" type="radio"
                          name="inlineRadioOptions" id="otherGender" value="other" />
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <select class="select" v-model="userData.user.state">
                          <option value="" selected disabled>State</option>
                          <option value="1">Maharastra</option>
                          <option value="2">Goa</option>
                          <option value="3">Gujrat</option>
                        </select>
                      </div>
                    
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="userData.user.pincode" type="text" id="form3Example90"
                        class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example90">Pincode</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="userData.user.course" type="text" id="form3Example99"
                        class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example99">Course</label>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="reset" class="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button type="button" @click.prevent="SubmitData" class="btn btn-warning btn-lg ms-2">
                        Update form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCrudStore } from "~/store/operation";

//reactive property
const userData = reactive({
  user: {
    id: "",
    firstName: "",
    email: "",
    city: "",
    address: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    course: "",
  },
  store: useCrudStore(),
});

//form submit
const SubmitData = () => {
  userData.store.updateUser(userData.user);
  navigateTo("/usertable");
};

//mounted
onMounted(() => {
  const { id } = useRoute().params;
  const record = userData.store.$state.data.find((item) => item.id === id);
  console.log(JSON.stringify(record));
  userData.user = record
});
</script>

<style>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.card-registration .select-arrow {
  top: 13px;
}
</style>
