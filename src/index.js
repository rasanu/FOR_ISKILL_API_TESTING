async function x() {
  //alert("hello");
  const r = await fetch("https://sharpenws.geekworkx.app/course_listing", {
    headers: {
      Authorization: "Bearer:CHHDVWP0KPQIY6ZEGJX6MQPFK8TB4B"
    }
  }).then((data) => {
    // console.log(data.json());
    return data.json();
  });

  console.log(r);
}
x();
