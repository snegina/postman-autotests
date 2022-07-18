// autotest for method https://api.hh.ru/languages

pm.test("Verify status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});


// autotest for method https://reqres.in/api/users

pm.test("Verify that last_name snegina", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.last_name).to.eql("snegina");
});

// autotest for method   https://swapi.dev/api/starships/5

pm.test("Verify status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
