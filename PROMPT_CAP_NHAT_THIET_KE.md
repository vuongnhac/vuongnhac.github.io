# Prompt Cap Nhat Thiet Ke Portfolio

## Muc tieu

Tinh chinh portfolio ca nhan theo huong gon, ro vai tro .NET Developer, uu tien cam giac chuyen nghiep, de doc va de cap nhat noi dung sau nay.

## Cap nhat da thuc hien

- Tang khoang cach giua hai nut hero `Contact Me` va `Download CV` de CTA thoang hon tren desktop va mobile.
- Tang khoang cach giua cac icon social network trong hero de tranh cam giac bi chen sat.
- Tang ti le icon trong `Core Skills`, sau do chuyen sang layout icon + title cung mot hang de dung ngon ngu thiet ke hien tai.
- Tinh chinh cac card `Primary Stack`, `Availability` va project card theo huong border transparent, khong shadow, surface nen nhe.
- Viet lai `Availability` thanh `Vietnam timezone (UTC+7)` va them dong giai thich ve gio lam viec se can chot theo vai tro hoac pham vi du an.
- Cap nhat `assets/files/profile-data.json` de luu lai cach hien thi availability moi.
- Canh giua cum nut hero `Contact Me` va `Download CV`.
- Xoa nen trang/xam phia sau icon `Core Skills`; icon hien truc tiep tren card de giao dien nhe hon.
- Chuyen cac card sang border transparent va bo shadow, ap dung dong bo cho About, Core Skills, Projects, Experience, Statistics va Contact.
- Tang kich thuoc icon trong Contact (`Phone`, `Email`, `Location`) de dung ti le voi card.
- Map thong tin `Phone`, `Email`, `Location` tu `assets/files/profile-data.json` bang `data-profile-field`; HTML van co fallback text khi fetch JSON khong chay.
- Trich xuat location tu CV hien co `assets/files/my_cv.pdf`: `635/9 Ba Hat, Dien Hong Ward, Ho Chi Minh City`. Repo hien chua co `assets/files/my_cd.pdf`.
- Bo shadow khoi card va cac thanh phan dang tao cam giac noi khoi nen trang; card chi giu border transparent va surface nen nhe.
- Bo label lap lai trong Contact (`Phone`, `Email`, `Location`) vi icon da du nghia; moi contact item hien icon + gia tri.
- Can lai typography: section title giam xuong mot cap, `Current Focus` va `.NET development` tang kich thuoc de can voi heading `Experience`.
- Doi `Core Skills` thanh layout icon + title cung mot hang, text mo ta nam ben duoi.
- Tang khoang cach giua doan About ket thuc bang `source is verified.` va cum `Primary Stack` bang layout gap lon hon tren desktop.

## Ngon ngu thiet ke

- Giao dien can mang tinh portfolio developer: gon, ro, dung muc, khong dung ngon ngu marketing qua da.
- Khoang cach giua cac CTA va icon can co nhip tho; khong de cac phan tu click nam qua sat nhau.
- Card nen dung border transparent, khong dung shadow mac dinh. Nen card co the rat nhe de tao nhom thong tin ma khong tach khoi bo cuc chinh.
- Icon skill can nam cung hang voi title de nguoi doc quet nhanh theo cap `icon -> label -> mo ta`.
- Contact item nen toi gian: dung icon thay label khi icon da quen thuoc, tranh lap lai noi dung.
- Cac thong tin chua xac minh tu CV can viet theo cach bao thu, khong dua so lieu hoac cam ket chua co nguon.

## Noi dung can tiep tuc xac minh

- Chuc danh chinh xac: `.NET Developer`, `Software Developer`, hay `Backend Developer`.
- So nam kinh nghiem va trang thai cong viec hien tai.
- Ten cong ty/du an nao duoc phep public.
- Metric that cho tung du an: nguoi dung, giao dich, bao cao, man hinh, hieu nang, uptime hoac thoi gian giao hang.
- Kenh lien he nhanh nhat.
- Link public cho GitHub, LinkedIn, Facebook va demo du an.

## Quy tac cap nhat tiep theo

- Moi thay doi ve prompt, dinh huong noi dung hoac quy uoc thiet ke nen duoc ghi them vao file nay.
- Neu co CV dang text, cap nhat `assets/files/profile-data.json` truoc, sau do moi cap nhat HTML.
- Chi publish so lieu, company name va project name khi da duoc xac minh.
