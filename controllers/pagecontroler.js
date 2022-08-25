const path = require('path');
const url = require('url');
const fs = require('fs');
const { json } = require('express');
const homepageshow = (req, res) => {
  res.render('index');
};
const aboutpageshow = (req, res) => {
  res.render('about');
};
const contactpageshow = (req, res) => {
  res.render('contact');
};
const pricepageshow = (req, res) => {
  res.render('price');
};
const projectpageshow = (req, res) => {
  res.render('project');
};
const servicepageshow = (req, res) => {
  res.render('service');
};
const teampageshow = (req, res) => {
  res.render('team');
};
const testimonialpageshow = (req, res) => {
  const testimonial = fs.readFileSync(
    path.join(__dirname, '../db/testimonial.json')
  );
  res.render('testimonial', {
    result: JSON.parse(testimonial.toString()),
  });
};

module.exports = {
  homepageshow,
  aboutpageshow,
  contactpageshow,
  pricepageshow,
  projectpageshow,
  servicepageshow,
  teampageshow,
  testimonialpageshow,
};
