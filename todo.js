function addElement() {
  let inputValue = document.getElementById('todo').value;

  // สร้าง div เพื่อห่อ item ใหม่
  let itemWrapper = document.createElement('div');
  itemWrapper.classList.add('boxes'); // เพิ่ม class ที่ต้องการ

  // สร้าง element แสดงข้อความ
  let newText = document.createElement('span');
  newText.textContent = inputValue;

  // สร้างปุ่ม
  let newBTN = document.createElement('button');
  newBTN.textContent = '🗑'; // หรือเปลี่ยนเป็น icon ก็ได้
  newBTN.addEventListener('click', function() {
    itemWrapper.remove(); // ลบตัวมันเองเมื่อคลิก
  });

  // ใส่ข้อความและปุ่มเข้า wrapper
  itemWrapper.appendChild(newText);
  itemWrapper.appendChild(newBTN);

  // ใส่ wrapper เข้า container
  document.getElementById('results').appendChild(itemWrapper);

  // ล้าง input
  document.getElementById('todo').value = "";
}



// สิ่งที่โค้ดกำลังพยายามทำ
// ดึงค่าจากช่อง input #todo

// สร้าง element ใหม่ที่จะแสดงข้อความ

// สร้างปุ่มใหม่

// เพิ่มทั้งข้อความและปุ่มเข้าไปใน div ปลายทาง #results

// ใส่ class "boxes"

// ล้าง input field