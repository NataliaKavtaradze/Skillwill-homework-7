function mySetTimeout(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function makeToy(delay) {
  return mySetTimeout(delay).then(() => {
    console.log("სათამაშო დამზადდა");
    return "TOY_READY";
  });
}

function deliverToys(delay) {
  return mySetTimeout(delay).then(() => {
    console.log("სათამაშოები გაიგზავნა");
    return "TOY_DELIVERED";
  });
}

function sellToy(delay) {
  return mySetTimeout(delay).then(() => {
    console.log("სათამაშო გაიყიდა");
    return "TOY_SOLD";
  });
}




    // async / await
async function runToyShop() {
  try {
    const made = await makeToy(3000);
    if (made !== "TOY_READY") throw new Error("სათამაშო ვერ დამზადდა");

    const delivered = await deliverToys(2000);
    if (delivered !== "TOY_DELIVERED") throw new Error("მიწოდება ვერ შესრულდა");

    const sold = await sellToy(1000);
    if (sold !== "TOY_SOLD") throw new Error("გაყიდვა ვერ შესრულდა");

    console.log("🎉 ყველა ნაბიჯი წარმატებით დასრულდა!");
  } catch (err) {
    console.error("❌ შეცდომა:", err.message);
  }
}

runToyShop();




