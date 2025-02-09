function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
      male0001.png
      ./images_folder./male0002.png
      ./images_folder./male0003.png
      ./images_folder./male0004.png
      ./images_folder./male0005.png
      ./images_folder./male0006.png
      ./images_folder./male0007.png
      ./images_folder./male0008.png
      ./images_folder./male0009.png
      ./images_folder./male0010.png
      ./images_folder./male0011.png
      ./images_folder./male0012.png
      ./images_folder./male0013.png
      ./images_folder./male0014.png
      ./images_folder./male0015.png
      ./images_folder./male0016.png
      ./images_folder./male0017.png
      ./images_folder./male0018.png
      ./images_folder./male0019.png
      ./images_folder./male0020.png
      ./images_folder./male0021.png
      ./images_folder./male0022.png
      ./images_folder./male0023.png
      ./images_folder./male0024.png
      ./images_folder./male0025.png
      ./images_folder./male0026.png
      ./images_folder./male0027.png
      ./images_folder./male0028.png
      ./images_folder./male0029.png
      ./images_folder./male0030.png
      ./images_folder./male0031.png
      ./images_folder./male0032.png
      ./images_folder./male0033.png
      ./images_folder./male0034.png
      ./images_folder./male0035.png
      ./images_folder./male0036.png
      ./images_folder./male0037.png
      ./images_folder./male0038.png
      ./images_folder./male0039.png
      ./images_folder./male0040.png
      ./images_folder./male0041.png
      ./images_folder./male0042.png
      ./images_folder./male0043.png
      ./images_folder./male0044.png
      ./images_folder./male0045.png
      ./images_folder./male0046.png
      ./images_folder./male0047.png
      ./images_folder./male0048.png
      ./images_folder./male0049.png
      ./images_folder./male0050.png
      ./images_folder./male0051.png
      ./images_folder./male0052.png
      ./images_folder./male0053.png
      ./images_folder./male0054.png
      ./images_folder./male0055.png
      ./images_folder./male0056.png
      ./images_folder./male0057.png
      ./images_folder./male0058.png
      ./images_folder./male0059.png
      ./images_folder./male0060.png
      ./images_folder./male0061.png
      ./images_folder./male0062.png
      ./images_folder./male0063.png
      ./images_folder./male0064.png
      ./images_folder./male0065.png
      ./images_folder./male0066.png
      ./images_folder./male0067.png
      ./images_folder./male0068.png
      ./images_folder./male0069.png
      ./images_folder./male0070.png
      ./images_folder./male0071.png
      ./images_folder./male0072.png
      ./images_folder./male0073.png
      ./images_folder./male0074.png
      ./images_folder./male0075.png
      ./images_folder./male0076.png
      ./images_folder./male0077.png
      ./images_folder./male0078.png
      ./images_folder./male0079.png
      ./images_folder./male0080.png
      ./images_folder./male0081.png
      ./images_folder./male0082.png
      ./images_folder./male0083.png
      ./images_folder./male0084.png
      ./images_folder./male0085.png
      ./images_folder./male0086.png
      ./images_folder./male0087.png
      ./images_folder./male0088.png
      ./images_folder./male0089.png
      ./images_folder./male0090.png
      ./images_folder./male0091.png
      ./images_folder./male0092.png
      ./images_folder./male0093.png
      ./images_folder./male0094.png
      ./images_folder./male0095.png
      ./images_folder./male0096.png
      ./images_folder./male0097.png
      ./images_folder./male0098.png
      ./images_folder./male0099.png
      ./images_folder./male0100.png
      ./images_folder./male0101.png
      ./images_folder./male0102.png
      ./images_folder./male0103.png
      ./images_folder./male0104.png
      ./images_folder./male0105.png
      ./images_folder./male0106.png
      ./images_folder./male0107.png
      ./images_folder./male0108.png
      ./images_folder./male0109.png
      ./images_folder./male0110.png
      ./images_folder./male0111.png
      ./images_folder./male0112.png
      ./images_folder./male0113.png
      ./images_folder./male0114.png
      ./images_folder./male0115.png
      ./images_folder./male0116.png
      ./images_folder./male0117.png
      ./images_folder./male0118.png
      ./images_folder./male0119.png
      ./images_folder./male0120.png
      ./images_folder./male0121.png
      ./images_folder./male0122.png
      ./images_folder./male0123.png
      ./images_folder./male0124.png
      ./images_folder./male0125.png
      ./images_folder./male0126.png
      ./images_folder./male0127.png
      ./images_folder./male0128.png
      ./images_folder./male0129.png
      ./images_folder./male0130.png
      ./images_folder./male0131.png
      ./images_folder./male0132.png
      ./images_folder./male0133.png
      ./images_folder./male0134.png
      ./images_folder./male0135.png
      ./images_folder./male0136.png
      ./images_folder./male0137.png
      ./images_folder./male0138.png
      ./images_folder./male0139.png
      ./images_folder./male0140.png
      ./images_folder./male0141.png
      ./images_folder./male0142.png
      ./images_folder./male0143.png
      ./images_folder./male0144.png
      ./images_folder./male0145.png
      ./images_folder./male0146.png
      ./images_folder./male0147.png
      ./images_folder./male0148.png
      ./images_folder./male0149.png
      ./images_folder./male0150.png
      ./images_folder./male0151.png
      ./images_folder./male0152.png
      ./images_folder./male0153.png
      ./images_folder./male0154.png
      ./images_folder./male0155.png
      ./images_folder./male0156.png
      ./images_folder./male0157.png
      ./images_folder./male0158.png
      ./images_folder./male0159.png
      ./images_folder./male0160.png
      ./images_folder./male0161.png
      ./images_folder./male0162.png
      ./images_folder./male0163.png
      ./images_folder./male0164.png
      ./images_folder./male0165.png
      ./images_folder./male0166.png
      ./images_folder./male0167.png
      ./images_folder./male0168.png
      ./images_folder./male0169.png
      ./images_folder./male0170.png
      ./images_folder./male0171.png
      ./images_folder./male0172.png
      ./images_folder./male0173.png
      ./images_folder./male0174.png
      ./images_folder./male0175.png
      ./images_folder./male0176.png
      ./images_folder./male0177.png
      ./images_folder./male0178.png
      ./images_folder./male0179.png
      ./images_folder./male0180.png
      ./images_folder./male0181.png
      ./images_folder./male0182.png
      ./images_folder./male0183.png
      ./images_folder./male0184.png
      ./images_folder./male0185.png
      ./images_folder./male0186.png
      ./images_folder./male0187.png
      ./images_folder./male0188.png
      ./images_folder./male0189.png
      ./images_folder./male0190.png
      ./images_folder./male0191.png
      ./images_folder./male0192.png
      ./images_folder./male0193.png
      ./images_folder./male0194.png
      ./images_folder./male0195.png
      ./images_folder./male0196.png
      ./images_folder./male0197.png
      ./images_folder./male0198.png
      ./images_folder./male0199.png
      ./images_folder./male0200.png
      ./images_folder./male0201.png
      ./images_folder./male0202.png
      ./images_folder./male0203.png
      ./images_folder./male0204.png
      ./images_folder./male0205.png
      ./images_folder./male0206.png
      ./images_folder./male0207.png
      ./images_folder./male0208.png
      ./images_folder./male0209.png
      ./images_folder./male0210.png
      ./images_folder./male0211.png
      ./images_folder./male0212.png
      ./images_folder./male0213.png
      ./images_folder./male0214.png
      ./images_folder./male0215.png
      ./images_folder./male0216.png
      ./images_folder./male0217.png
      ./images_folder./male0218.png
      ./images_folder./male0219.png
      ./images_folder./male0220.png
      ./images_folder./male0221.png
      ./images_folder./male0222.png
      ./images_folder./male0223.png
      ./images_folder./male0224.png
      ./images_folder./male0225.png
      ./images_folder./male0226.png
      ./images_folder./male0227.png
      ./images_folder./male0228.png
      ./images_folder./male0229.png
      ./images_folder./male0230.png
      ./images_folder./male0231.png
      ./images_folder./male0232.png
      ./images_folder./male0233.png
      ./images_folder./male0234.png
      ./images_folder./male0235.png
      ./images_folder./male0236.png
      ./images_folder./male0237.png
      ./images_folder./male0238.png
      ./images_folder./male0239.png
      ./images_folder./male0240.png
      ./images_folder./male0241.png
      ./images_folder./male0242.png
      ./images_folder./male0243.png
      ./images_folder./male0244.png
      ./images_folder./male0245.png
      ./images_folder./male0246.png
      ./images_folder./male0247.png
      ./images_folder./male0248.png
      ./images_folder./male0249.png
      ./images_folder./male0250.png
      ./images_folder./male0251.png
      ./images_folder./male0252.png
      ./images_folder./male0253.png
      ./images_folder./male0254.png
      ./images_folder./male0255.png
      ./images_folder./male0256.png
      ./images_folder./male0257.png
      ./images_folder./male0258.png
      ./images_folder./male0259.png
      ./images_folder./male0260.png
      ./images_folder./male0261.png
      ./images_folder./male0262.png
      ./images_folder./male0263.png
      ./images_folder./male0264.png
      ./images_folder./male0265.png
      ./images_folder./male0266.png
      ./images_folder./male0267.png
      ./images_folder./male0268.png
      ./images_folder./male0269.png
      ./images_folder./male0270.png
      ./images_folder./male0271.png
      ./images_folder./male0272.png
      ./images_folder./male0273.png
      ./images_folder./male0274.png
      ./images_folder./male0275.png
      ./images_folder./male0276.png
      ./images_folder./male0277.png
      ./images_folder./male0278.png
      ./images_folder./male0279.png
      ./images_folder./male0280.png
      ./images_folder./male0281.png
      ./images_folder./male0282.png
      ./images_folder./male0283.png
      ./images_folder./male0284.png
      ./images_folder./male0285.png
      ./images_folder./male0286.png
      ./images_folder./male0287.png
      ./images_folder./male0288.png
      ./images_folder./male0289.png
      ./images_folder./male0290.png
      ./images_folder./male0291.png
      ./images_folder./male0292.png
      ./images_folder./male0293.png
      ./images_folder./male0294.png
      ./images_folder./male0295.png
      ./images_folder./male0296.png
      ./images_folder./male0297.png
      ./images_folder./male0298.png
      ./images_folder./male0299.png
      ./images_folder./male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  //markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      //markers:true,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      //markers:true,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      //markers:true,
      pin:true,
      scroller:`#main`
    }
  })
