function get_args() {
  var python = require("python-shell");
  var path = require("path");

  var listArgs = document.getElementById("args").value;
  document.getElementById("args").value = "";

  var option = {
    scriptPath: path.join(__dirname, "/../backend/"),
    args: [listArgs]
  };
  var result = new python("calculate.py", option);

  result.on("message", function (message) {
    swal(message);
  });
}
