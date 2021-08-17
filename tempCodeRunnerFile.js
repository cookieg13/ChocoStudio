const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contactDG", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});