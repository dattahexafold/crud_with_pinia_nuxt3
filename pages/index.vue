<template>
  <div>
    <Form @submit="SubmitData" :validation-schema="schema" v-slot="{ errors, handleSubmit, validate }">
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
                      Student registration form
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <Field name="id" type="" id="form3Example1m" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1m">ID</label>
                          <br />
                          <span>{{ errors.id }}</span>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <Field name="firstName" type="text" id="form3Example1n" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1n">first name</label>
                          <br />
                          <span>{{ errors.firstName }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <Field name="email" type="text" id="form3Example1m1" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1m1">Email</label>
                          <br />
                          <span>{{ errors.email }}</span>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <Field name="city" type="text" id="form3Example1n1" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1n1">City</label>
                          <br />
                          <span>{{ errors.city }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <Field name="address" type="text" id="form3Example8" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example8">Address</label>
                      <br />
                      <span>{{ errors.address }}</span>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 class="mb-0 me-4">Gender:</h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <Field name="gender" class="form-check-input" type="radio" id="femaleGender" value="female" />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <Field class="form-check-input" type="radio" name="gender" id="maleGender" value="male" />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <Field class="form-check-input" type="radio" name="gender" id="otherGender" value="other" />
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>
                      <br />
                      <span>{{ errors.gender }}</span>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <Field class="select" name="state" as="select">
                          <option value="" selected disabled>State</option>
                          <option value="1">Maharastra</option>
                          <option value="2">Goa</option>
                          <option value="3">Gujrat</option>
                        </Field>
                        <br />
                        <span>{{ errors.state }}</span>
                      </div>
                     
                    </div>

                    <div class="form-outline mb-4">
                      <Field name="pincode" type="text" id="form3Example90" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example90">Pincode</label>
                      <br />
                      <span>{{ errors.pincode }}</span>
                    </div>

                    <div class="form-outline mb-4">
                      <Field name="cource" type="text" id="form3Example99" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example99">Course</label>
                      <br />
                      <span>{{ errors.cource }}</span>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="reset" class="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button type="submit" class="btn btn-warning btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { useCrudStore } from "~/store/operation";
import * as yup from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";

//define form schema
const schema = yup.object({
  id: yup.string().required(),
  firstName: yup.string().required(),
  email: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  pincode: yup.string().required(),
  cource: yup.string().required(),
});

//submit form
const SubmitData = (values) => {
  console.log(values);
  if (values) {
    useCrudStore().addUser(values);
    navigateTo("/usertable");
  }
  else {
    console.log("error");
  }

};
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

span {
  color: red;
}
</style>
