function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },
  };
  return self;
}

$("h2").on("click", function () {
  location.reload();
});

// function grid(selector) {
//   const grid = new Grid({
//     columns: ["Name", "Email", "Phone Number"],
//     data: [
//       ["John", "john@example.com", "(353) 01 222 3333"],
//       ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//     ],
//   });
//   return grid;
// }

// grid("h1").on("click", function () {

// });
