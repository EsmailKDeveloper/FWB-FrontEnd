'use client'
import QRCode from "qrcode";
import { jsPDF } from "jspdf";

export const downloadPremiumStudentCard = async (profile: any) => {
  if (!profile) return;

  // اندازه بزرگ‌تر برای کیفیت بالا
  const width = 1200;
  const height = 800;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // ===== Gradient background =====
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#4f46e5");
  gradient.addColorStop(1, "#10b981");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // ===== Rounded border + shadow =====
  const borderRadius = 40;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.25)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;

  ctx.beginPath();
  ctx.moveTo(borderRadius, 0);
  ctx.lineTo(width - borderRadius, 0);
  ctx.quadraticCurveTo(width, 0, width, borderRadius);
  ctx.lineTo(width, height - borderRadius);
  ctx.quadraticCurveTo(width, height, width - borderRadius, height);
  ctx.lineTo(borderRadius, height);
  ctx.quadraticCurveTo(0, height, 0, height - borderRadius);
  ctx.lineTo(0, borderRadius);
  ctx.quadraticCurveTo(0, 0, borderRadius, 0);
  ctx.closePath();
  ctx.clip();

  // ===== Inner white rectangle =====
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.fillRect(20, 20, width - 40, height - 40);

  // ===== Logo =====
  const logo = new Image();
  logo.src = "/logo2.png";
  await new Promise((resolve) => {
    logo.onload = () => {
      ctx.drawImage(logo, 40, 40, 160, 160);
      resolve(true);
    };
  });

  // ===== Student photo =====
  const studentImg = new Image();
  studentImg.src = "/user_img.webp";
  await new Promise((resolve) => {
    studentImg.onload = () => {
      ctx.drawImage(studentImg, width / 2 - 150, 200, 300, 300);
      resolve(true);
    };
  });

  // ===== Texts =====
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";

  // نام و نام خانوادگی
  ctx.font = "bold 64px Shabnam, sans-serif";
  ctx.fillText(`${profile.first_name} ${profile.last_name}`, width / 2, 550);

  // عنوان دانشجو
  ctx.font = "44px Shabnam, sans-serif";
  ctx.fillText("دانشجو فرانت وب آکادمی", width / 2, 610);

  // کد دانشجویی
  ctx.font = "36px Shabnam, sans-serif";
  ctx.fillText(`کد دانشجویی: ${profile.student_code}`, width / 2, 660);

  // ===== QR Code با متن خوش آمدگویی =====
  const qrText = `
  کاربر عزیز خوش آمدی به سایت آکادمی فرانت وب این کارت دانشجویی ${profile.first_name} ${profile.last_name} اگر شما هم خواهان اشتراک در دوره های برنامه نویسی ما هستید از داخل سایت بخش درخواست مشاوره اطلاعات تان را وارد نمایید این دانشجوی دوره برنامه نویسی وب ما می باشد خوشحال شدم از آشنایی شما
  `;
  const qrDataUrl = await QRCode.toDataURL(qrText, { width: 240, margin: 2 });
  const qrImg = new Image();
  qrImg.src = qrDataUrl;
  await new Promise((resolve) => {
    qrImg.onload = () => {
      ctx.drawImage(qrImg, width - 280, height - 280, 240, 240);
      resolve(true);
    };
  });

  ctx.restore();

  // ===== Download PNG =====
  const pngLink = document.createElement("a");
  pngLink.download = "student-card.png";
  pngLink.href = canvas.toDataURL("image/png");
  pngLink.click();

  // ===== Download PDF =====
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [width, height] });
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);
  pdf.save("student-card.pdf");
};