class Question {
    constructor(content, answer, correctAnswer) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

// TODO answer là một đối tượng.as

let q101 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Năm ngón tay cũng có […]. Nhưng đều hợp nhau nơi bàn tay”.",
    [
        "A. Ngón vắn, ngón dài.",
        "B. Ngón ngắn, ngón dài.",
        "C. Dài, ngắn khác nhau.",
        "D. Ngắn, dài không đều."
    ],
    "A. Ngón vắn, ngón dài."
);

let q102 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, chuẩn mực đạo đức cách mạng là:",
    [
        "A. Sẵn sàng chiến đấu, hy sinh vì Tổ quốc.",
        "B. Trung với nước, hiếu với dân.",
        "C. Cần, kiệm, liêm, chính, chí công vô tư.",
        "D. Yêu thương con người, sống có tình có nghĩa."
    ],
    "D. Yêu thương con người, sống có tình có nghĩa."
);

let q103 = new Question(
    "Câu hỏi: Sau khi lên tàu đi tìm đường cứu nước, Hồ Chí Minh đến nước nào đầu tiên? Thời gian nào?",
    [
        "A. Nước Pháp, ngày 06/07/1911.",
        "B. Nước Pháp, ngày 05/06/1911.",
        "C. Châu Phi, ngày 06/07/1911.",
        "D. Nam Phi, ngày 25/06/1911."
    ],
    "B. Nước Pháp, ngày 05/06/1911."
);

let q104 = new Question(
    "Câu hỏi: Hồ Chí Minh tiếp cận văn hóa nghĩa hẹp hơn, có nghĩa là:",
    [
        "A. Các trường học, số người đi học, biết đọc, biết viết.",
        "B. Tổng hợp mọi phương thức sản xuất của con người.",
        "C. Đời sống tinh thần của xã hội, thuộc cơ sở hạ tầng.",
        "D. Sản phẩm, công cụ sinh hoạt cụ thể của người dân."
    ],
    "A. Các trường học, số người đi học, biết đọc, biết viết."
);

let q105 = new Question(
    "Câu hỏi: Câu nói: “Ai cũng tham lợi, thì nước sẽ nguy”, là của ai?",
    [
        "A. Mạnh Tử.",
        "B. Tất Đạt Đa.",
        "C. Khổng Tử.",
        "D. Lão Tử."
    ],
    "A. Mạnh Tử."
);

let q106 = new Question(
    "Câu hỏi: Chức năng điều chỉnh xã hội tương ứng với đặc trưng nào của văn hóa?",
    [
        "A. Tính giá trị.",
        "B. Tính lịch sử.",
        "C. Tính nhân sinh.",
        "D. Tính hệ thống."
    ],
    "A. Tính giá trị."
);

let q107 = new Question(
    "Câu hỏi: Đâu là phạm trù cơ bản của đạo đức?",
    [
        "A. Lẽ sống, thiện ác, hạnh phúc, trách nhiệm, lương tâm.",
        "B. Lẽ sống, thiện ác.",
        "C. Lẽ sống, thiện ác, hạnh phúc.",
        "D. Lẽ sống, hạnh phúc, trách nhiệm."
    ],
    "A. Lẽ sống, thiện ác, hạnh phúc, trách nhiệm, lương tâm."
);

let q108 = new Question(
    "Câu hỏi: Xác định lẽ sống để làm gì?",
    [
        "A. Chọn cho mình ý nghĩa của cuộc sống.",
        "B. Chọn cho mình lý do để sống.",
        "C. Chọn cho mình hướng đi.",
        "D. Chọn cho mình nghề nghiệp."
    ],
    "A. Chọn cho mình ý nghĩa của cuộc sống."
);

let q109 = new Question(
    "Câu hỏi: Sau khi học trường Quốc tế Lênin, Hồ Chí Minh đã viết thư muốn ngỏ ý cống hiến cho Quốc tế Cộng sản. Lá thư được viết vào thời gian nào?",
    [
        "A. Tháng 06/1938.",
        "B. Tháng 01/1938.",
        "C. Tháng 10/1938.",
        "D. Tháng 12/1939."
    ],
    "A. Tháng 06/1938."
);
let q110 = new Question(
    "Câu hỏi: Xét về tính giá trị, sự khác nhau giữa văn hóa và văn minh là:",
    [
        "A. Văn minh thiên về vật chất - kỹ thuật còn văn hóa thiên về vật chất tinh thần.",
        "B. Văn hóa gắn với phương Đông nông nghiệp, văn minh gắn với phương Tây đô thị.",
        "C. Văn minh có trình độ phát triển còn văn hóa có bề dày lịch sử.",
        "D. Văn hóa mang tính dân tộc còn văn minh mang tính quốc tế."
    ],
    "A. Văn minh thiên về vật chất - kỹ thuật còn văn hóa thiên về vật chất tinh thần."
);

let q111 = new Question(
    "Câu hỏi: Đặc trưng nào cho phép phân biệt văn hóa như một hiện tượng xã hội do con người tạo ra với các giá trị tự nhiên do thiên nhiên tạo ra?",
    [
        "A. Tính nhân sinh.",
        "B. Tính lịch sử.",
        "C. Tính giá trị.",
        "D. Tính hệ thống."
    ],
    "A. Tính nhân sinh."
);

let q112 = new Question(
    "Câu hỏi: Báo Le Paria (Người Cùng khổ) do Nguyễn Ái Quốc đồng sáng lập, ra số đầu tiên vào ngày nào?",
    [
        "A. 01/04/1922.",
        "B. 30/12/1920.",
        "C. 10/05/1921.",
        "D. 16/08/1923."
    ],
    "A. 01/04/1922."
);

let q113 = new Question(
    "Câu hỏi: Nguyễn Tất Thành tham gia vào Đảng Xã hội Pháp thời gian nào?",
    [
        "A. Tháng 02 năm 1919.",
        "B. Tháng 10 năm 1917.",
        "C. Tháng 12 năm 1918.",
        "D. Tháng 02 năm 1920."
    ],
    "A. Tháng 02 năm 1919."
);

let q114 = new Question(
    "Câu hỏi: Phương pháp luận Hồ Chí Minh cho rằng: con người phải luôn luôn thích nghi với mọi hoàn cảnh, muốn thích nghi con người cần:",
    [
        "A. Phải luôn luôn tự đổi mới để phát triển.",
        "B. Phải luôn luôn học tập mở rộng tri thức của bản thân về xã hội.",
        "C. Phải luôn luôn học tập mở rộng tri thức khám phá về bản thân, về xã hội.",
        "D. Phải học tập để thích nghi với hoàn cảnh mới."
    ],
    "A. Phải luôn luôn tự đổi mới để phát triển."
);

let q115 = new Question(
    "Câu hỏi: Hành vi đạo đức gắn với:",
    [
        "A. Ý thức đạo đức.",
        "B. Ý thức trách nhiệm.",
        "C. Lý trí.",
        "D. Lòng nhân đạo."
    ],
    "A. Ý thức đạo đức."
);

let q116 = new Question(
    "Câu hỏi: Cơ sở khách quan quyết định đến sự hình thành tư tưởng Hồ Chí Minh là:",
    [
        "A. Chủ nghĩa Mác – Lênin.",
        "B. Tinh hoa văn hóa dân tộc.",
        "C. Tinh hoa văn hoá nhân loại.",
        "D. Chủ nghĩa tam dân."
    ],
    "A. Chủ nghĩa Mác – Lênin."
);

let q117 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, ưu điểm lớn nhất của tôn giáo GiêSu là gì?",
    [
        "A. Lòng nhân ái cao cả.",
        "B. Đức hy sinh.",
        "C. Lòng cao thượng.",
        "D. Lòng từ bi bác ái."
    ],
    "A. Lòng nhân ái cao cả."
);

let q118 = new Question(
    "Câu hỏi: Hệ tư tưởng có tính quyết định đến sự hình thành lối sống của Hồ Chí Minh là:",
    [
        "A. Chủ nghĩa Mác – Lênin.",
        "B. Tư tưởng Lão giáo.",
        "C. Tư tưởng Nho giáo.",
        "D. Tư tưởng Phật giáo."
    ],
    "A. Chủ nghĩa Mác – Lênin."
);
let q119 = new Question(
    "Câu hỏi: Truyền thống văn hóa dân tộc giữ vị trí hàng đầu hình thành nên tư tưởng Hồ Chí Minh là:",
    [
        "A. Truyền thống yêu nước.",
        "B. Truyền thống đoàn kết.",
        "C. Truyền thống cần cù, sáng tạo.",
        "D. Truyền thống hiếu học."
    ],
    "A. Truyền thống yêu nước."
);

let q120 = new Question(
    "Câu hỏi: Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh trải qua mấy giai đoạn và giai đoạn nào quan trọng nhất?",
    [
        "A. Năm giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất.",
        "B. Ba giai đoạn, giai đoạn từ khi sinh ra đến trước 05/06/1911 là quan trọng nhất.",
        "C. Bốn giai đoạn, giai đoạn từ khi sinh ra đến trước 05/06/1911 là quan trọng nhất.",
        "D. Sáu giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất."
    ],
    "A. Năm giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất."
);

let q121 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, khát vọng lớn nhất của dân tộc thuộc địa là gì?",
    [
        "A. Độc lập và tự do.",
        "B. Ruộng đất cho dân cày.",
        "C. Hòa bình và ruộng đất.",
        "D. Quyền bình đẳng."
    ],
    "A. Độc lập và tự do."
);

let q122 = new Question(
    "Câu hỏi: Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho:",
    [
        "A. Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới.",
        "B. Dân tộc thuộc địa các nước đang bị áp bức trên thế giới.",
        "C. Dân tộc thuộc địa các nước đang bị áp bức ở phương Đông.",
        "D. Tất cả các quốc gia, tộc người và dân tộc trên thế giới."
    ],
    "A. Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới."
);

let q123 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Thực chất của vấn đề dân tộc độc lập trong tư tưởng Hồ Chí Minh là:",
    [
        "A. Đòi quyền bình đẳng giữa các dân tộc.",
        "B. Đấu tranh giải phóng dân tộc.",
        "C. Thành lập nhà nước dân tộc độc lập.",
        "D. Xây dựng nhà nước của dân, do dân, vì dân."
    ],
    "A. Đòi quyền bình đẳng giữa các dân tộc."
);

let q124 = new Question(
    "Câu hỏi: Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn giữa:",
    [
        "A. Chủ nghĩa yêu nước và chủ nghĩa quốc tế.",
        "B. Vấn đề dân tộc và vấn đề giai cấp.",
        "C. Độc lập dân tộc với tự do, hạnh phúc.",
        "D. Chủ nghĩa dân tộc và chủ nghĩa xã hội."
    ],
    "A. Chủ nghĩa yêu nước và chủ nghĩa quốc tế."
);

let q125 = new Question(
    "Câu hỏi: Trong tư tưởng Hồ Chí Minh, giải phóng con người trước hết là:",
    [
        "A. Giải phóng quần chúng lao động.",
        "B. Giải phóng giai cấp công nhân.",
        "C. Giải phóng giai cấp nông dân.",
        "D. Giải phóng giai cấp vô sản."
    ],
    "A. Giải phóng quần chúng lao động."
);

let q126 = new Question(
    "Câu hỏi: Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    [
        "A. Dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng.",
        "B. Giai cấp nông dân với giai cấp địa chủ phong kiến, tư sản Việt Nam và tư sản Pháp.",
        "C. Giai cấp công nhân với giai cấp tư sản Pháp và tay sai của chúng.",
        "D. Giai cấp công nhân và nông dân với đế quốc phong kiến và chính quyền thực dân."
    ],
    "A. Dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng."
);

let q127 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Con đường cách mạng cuối thế kỷ XIX đầu thế kỷ XX ở Việt Nam:",
    [
        "A. Cách mạng vô sản.",
        "B. Cách mạng phong kiến.",
        "C. Cách mạng dân chủ tư sản.",
        "D. Cải cách dân chủ tư sản."
    ],
    "A. Cách mạng vô sản."
);
let q128 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệp của:",
    [
        "A. Quần chúng nhân dân.",
        "B. Đảng Cộng sản Việt Nam.",
        "C. Giai cấp công nhân.",
        "D. Công nhân và nông dân."
    ],
    "A. Quần chúng nhân dân."
);

let q129 = new Question(
    "Câu hỏi: Trong tư tưởng Hồ Chí Minh, bạo lực cách mạng luôn thống nhất với:",
    [
        "A. Tư tưởng nhân đạo hòa bình.",
        "B. Tư tưởng đấu tranh ngoại giao.",
        "C. Tư tưởng đấu tranh hòa bình.",
        "D. Tư tưởng cách mạng không ngừng."
    ],
    "A. Tư tưởng nhân đạo hòa bình."
);

let q130 = new Question(
    "Câu hỏi: Chọn đáp án ĐÚNG nhất với tư tưởng Hồ Chí Minh:",
    [
        "A. Cách mạng giải phóng dân tộc có khả năng nổ ra và giành được thắng lợi trước cách mạng vô sản ở chính quốc.",
        "B. Cách mạng giải phóng dân tộc giành thắng lợi đồng thời với thắng lợi cách mạng vô sản ở chính quốc.",
        "C. Thắng lợi của cách mạng vô sản ở thuộc địa phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc.",
        "D. Thắng lợi của cách mạng vô sản ở chính quốc là tiền đề, cách mạng giải phóng dân tộc ở thuộc địa là hệ quả."
    ],
    "A. Cách mạng giải phóng dân tộc có khả năng nổ ra và giành được thắng lợi trước cách mạng vô sản ở chính quốc."
);

let q131 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, muốn xây dựng CNXH trước hết cần phải có:",
    [
        "A. Con người xã hội chủ nghĩa.",
        "B. Khoa học - kỹ thuật tiên tiến.",
        "C. Nền kinh tế phát triển cao.",
        "D. Văn hóa đậm đà bản sắc dân tộc."
    ],
    "A. Con người xã hội chủ nghĩa."
);

let q132 = new Question(
    "Câu hỏi: “Đảng Cộng Sản Việt Nam là sự kết hợp của chủ nghĩa Mác – Lênin với phong trào công nhân và […]”. Điền vào chỗ trống đúng theo Hồ Chí Minh.",
    [
        "A. Phong trào yêu nước.",
        "B. Phong trào nông dân.",
        "C. Tầng lớp trí thức.",
        "D. Phong trào dân chủ."
    ],
    "A. Phong trào yêu nước."
);

let q133 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên:",
    [
        "A. Chủ nghĩa Mác – Lênin.",
        "B. Nguyên tắc tự phê bình và phê bình.",
        "C. Nguyên tắc tập trung dân chủ.",
        "D. Đại đoàn kết dân tộc."
    ],
    "A. Chủ nghĩa Mác – Lênin."
);

let q134 = new Question(
    "Câu hỏi: Chọn phương án trả lời đúng với tư tưởng Hồ Chí Minh:",
    [
        "A. Từ 1921 - 1930: Thời kỳ hình thành nội dung cơ bản tư tưởng cách mạng Việt Nam.",
        "B. Từ 1890 - 1911: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghĩa Mác – Lênin.",
        "C. Từ 1911 - 1920: Thời kỳ hình thành tư tưởng yêu nước, chí hướng cứu nước.",
        "D. Từ 1921 - 1930: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghĩa Mác – Lênin."
    ],
    "A. Từ 1921 - 1930: Thời kỳ hình thành nội dung cơ bản tư tưởng cách mạng Việt Nam."
);

let q135 = new Question(
    "Câu hỏi: “Công nông là gốc của cách mạng, còn học trò, nhà buôn nhỏ, điền chủ nhỏ là bầu bạn cách mạng của công nông” được Nguyễn Ái Quốc đưa ra để xác định:",
    [
        "A. Lực lượng cách mạng.",
        "B. Phương pháp cách mạng.",
        "C. Nhiệm vụ của cách mạng.",
        "D. Vai trò của đoàn kết."
    ],
    "A. Lực lượng cách mạng."
);
let q136 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, trong xây dựng đường lối chính trị, Đảng cần:",
    [
        "A. Phát huy tài năng của các nhà nghiên cứu lý luận giỏi.",
        "B. Dựa trên cơ sở lý luận của chủ nghĩa Mác – Lênin.",
        "C. Vận dụng kinh nghiệm vào điều kiện cụ thể của đất nước.",
        "D. Là đội tiên phong dũng cảm, là bộ tham mưu sáng suốt."
    ],
    "A. Phát huy tài năng của các nhà nghiên cứu lý luận giỏi."
);

let q137 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, nguy cơ lớn nhất của một đảng cầm quyền là gì?",
    [
        "A. Sai lầm về đường lối và sự suy thoái đạo đức của cán bộ, đảng viên.",
        "B. Diễn biến hòa bình của các thế lực thù địch bên trong và bên ngoài.",
        "C. Đi lệch định hướng, mục tiêu đã đề ra khi xây dựng chủ nghĩa xã hội.",
        "D. Tụt hậu về nhận thức sự thay đổi trong thời đại khoa học, công nghệ."
    ],
    "A. Sai lầm về đường lối và sự suy thoái đạo đức của cán bộ, đảng viên."
);

let q138 = new Question(
    "Câu hỏi: Tư tưởng Hồ Chí Minh KHÔNG bắt nguồn từ:",
    [
        "A. Yêu cầu của cách mạng giải phóng thuộc địa.",
        "B. Giá trị truyền thống tốt đẹp của dân tộc Việt Nam.",
        "C. Giá trị tinh hoa văn hóa của phương Đông.",
        "D. Giá trị tinh hoa văn hóa của nhân loại."
    ],
    "A. Yêu cầu của cách mạng giải phóng thuộc địa."
);

let q139 = new Question(
    "Câu hỏi: Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh về nhà nước pháp quyền là gì?",
    [
        "A. Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội.",
        "B. Coi trọng pháp luật trong quản lý xã hội, đặc biệt trong phát triển kinh tế.",
        "C. Đề cao đạo đức trong quản lý xã hội, đề cao tư tưởng nhân đạo hòa bình.",
        "D. Đảm bảo tính nghiêm minh và hiệu lực của pháp luật trong quản lý xã hội."
    ],
    "A. Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội."
);

let q140 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Chế độ ta là chế độ dân chủ, nghĩa là […] làm chủ”.",
    [
        "A. Nhân dân.",
        "B. Công nhân.",
        "C. Công dân.",
        "D. Công - Nông."
    ],
    "A. Nhân dân."
);

let q141 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Theo Hồ Chí Minh, nhà nước vì dân là nhà nước:",
    [
        "A. Tất cả đều vì lợi ích của nhân dân.",
        "B. Phục vụ quần chúng nhân dân lao động.",
        "C. Do quần chúng nhân dân lao động làm chủ.",
        "D. Chăm lo mọi mặt đời sống cho nhân dân."
    ],
    "A. Tất cả đều vì lợi ích của nhân dân."
);

let q142 = new Question(
    "Câu hỏi: Bầu cử các đại biểu Quốc hội và Hội đồng Nhân dân các cấp vào các cơ quan quyền lực nhà nước thuộc loại hình dân chủ:",
    [
        "A. Dân chủ trực tiếp.",
        "B. Trực tiếp và gián tiếp.",
        "C. Tự do tập trung.",
        "D. Dân chủ gián tiếp."
    ],
    "A. Dân chủ trực tiếp."
);

let q143 = new Question(
    "Câu hỏi: Cơ sở thế giới quan và phương pháp luận của tư tưởng Hồ Chí Minh là:",
    [
        "A. Chủ nghĩa Mác – Lênin.",
        "B. Chủ nghĩa yêu nước.",
        "C. Tinh hoa văn hóa nhân loại.",
        "D. Tinh hoa văn hóa người Việt Nam."
    ],
    "A. Chủ nghĩa Mác – Lênin."
);

let q144 = new Question(
    "Câu hỏi: Chọn câu trả lời đúng nhất với tư tưởng Hồ Chí Minh:",
    [
        "A. Đại đoàn kết dân tộc là vấn đề chiến lược.",
        "B. Đại đoàn kết dân tộc là vấn đề sách lược.",
        "C. Đại đoàn kết dân tộc là thủ đoạn chính trị.",
        "D. Đại đoàn kết dân tộc là vấn đề sống còn."
    ],
    "A. Đại đoàn kết dân tộc là vấn đề chiến lược."
);

let q145 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn […]”.",
    [
        "A. Con người mắt mình.",
        "B. Tính mạng của mình.",
        "C. Nhân cách của mình.",
        "D. Con mắt của mình."
    ],
    "A. Con người mắt mình."
);
let q146 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, đoàn kết quốc tế có vai trò như thế nào đối với thắng lợi của cách mạng?",
    [
        "A. Là vấn đề mang tính quan trọng.",
        "B. Là vấn đề chiến lược quyết định sự thắng lợi.",
        "C. Là vấn đề vừa quan trọng vừa quyết định.",
        "D. Là vấn đề mang tính quyết định."
    ],
    "B. Là vấn đề chiến lược quyết định sự thắng lợi."
);

let q147 = new Question(
    "Câu hỏi: Lý do nào sau đây giúp cho tư tưởng Hồ Chí Minh về đoàn kết trở thành di sản văn hóa thế giới?",
    [
        "A. Đoàn kết là sức mạnh, đoàn kết là then chốt của mọi thành công.",
        "B. Đoàn là một lực lượng vô địch của chúng ta để khắc phục khó khăn.",
        "C. Đoàn kết là nhu cầu, nguyện vọng sống của tất cả mọi người.",
        "D. Đoàn kết tạo ra sức mạnh, tạo ra lực lượng để xây dựng đất nước."
    ],
    "A. Đoàn kết là sức mạnh, đoàn kết là then chốt của mọi thành công."
);

let q148 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, mục đích của Đảng Lao động Việt Nam có thể gộp trong tám chữ, đó là:",
    [
        "A. Đoàn kết toàn dân, phụng sự tổ quốc.",
        "B. Thành công, thành công, đại thành công.",
        "C. Đoàn kết nhất trí, xây dựng thành công.",
        "D. Đoàn kết toàn dân, quyết tâm thắng lợi."
    ],
    "A. Đoàn kết toàn dân, phụng sự tổ quốc."
);

let q149 = new Question(
    "Câu hỏi: Trong khối đại đoàn kết dân tộc, đặc biệt chú trọng yếu tố hạt nhân là gì?",
    [
        "A. Sự đoàn kết và thống nhất trong Đảng.",
        "B. Sự đoàn kết, thống nhất trong sáng.",
        "C. Sự thống nhất, đồng sức, đồng lòng.",
        "D. Sự đoàn kết, nhất trí trong nhân dân."
    ],
    "A. Sự đoàn kết và thống nhất trong Đảng."
);

let q150 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, để thực hiện đại đoàn kết thì đối với những đồng bào lạc lối lầm đường, ta phải:",
    [
        "A. Lấy tình thân ái mà cảm hóa họ.",
        "B. Có lòng khoan dung đối với họ.",
        "C. Giáo dục để họ biết sửa chữa sai lầm.",
        "D. Kiên quyết loại ra khỏi khối đại đoàn kết."
    ],
    "A. Lấy tình thân ái mà cảm hóa họ."
);

let q151 = new Question(
    "Câu hỏi: Yếu tố KHÔNG nằm trong cơ cấu Mặt trận Dân tộc thống nhất là gì?",
    [
        "A. Đoàn Thanh niên Cộng sản Hồ Chí Minh.",
        "B. Đảng Cộng sản Việt Nam.",
        "C. Các tổ chức chính trị - xã hội.",
        "D. Nhà nước xã hội chủ nghĩa."
    ],
    "D. Nhà nước xã hội chủ nghĩa."
);

let q152 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc tán thành Quốc tế III, tham gia thành lập Đảng Cộng sản Pháp vào thời gian nào?",
    [
        "A. Tháng 12 năm 1920.",
        "B. Tháng 02 năm 1919.",
        "C. Tháng 12 năm 1919.",
        "D. Tháng 02 năm 1921."
    ],
    "A. Tháng 12 năm 1920."
);

let q153 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Rằng đây bốn bể một nhà, […] đều là anh em”.",
    [
        "A. Vàng Đen Trắng Đỏ.",
        "B. Bốn phương vô sản.",
        "C. Đông Tây Nam Bắc.",
        "D. Lao động thế giới."
    ],
    "A. Vàng Đen Trắng Đỏ."
);

let q154 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh. Trong đoàn kết quốc tế, “Muốn người ta giúp cho thì trước hết mình phải […]”.",
    [
        "A. Tự giúp lấy mình đã.",
        "B. Giúp người ta trước.",
        "C. Tự cố gắng đứng dậy.",
        "D. Kêu gọi sự giúp đỡ."
    ],
    "A. Tự giúp lấy mình đã."
);
let q155 = new Question(
    "Câu hỏi: “Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập”. Câu nói Hồ Chí Minh trong:",
    [
        "A. Kháng chiến chống thực dân Pháp.",
        "B. Kháng chiến chống phong kiến.",
        "C. Kháng chiến chống thực dân.",
        "D. Kháng chiến chống đế quốc Mỹ."
    ],
    "A. Kháng chiến chống thực dân Pháp."
);

let q156 = new Question(
    "Câu hỏi: Hồ Chí Minh được UNESCO ra quyết định công nhận vào thời gian nào?",
    [
        "A. Ngày 20/10/1987 đến 20/11/1987.",
        "B. Ngày 30/4/1987 đến 01/5/1987.",
        "C. Ngày 19/5/1987 đến 20/6/1987.",
        "D. Ngày 20/11/1987 đến 22/12/1987."
    ],
    "A. Ngày 20/10/1987 đến 20/11/1987."
);

let q157 = new Question(
    "Câu hỏi: Hồ Chí Minh có bao nhiêu cách tiếp cận chủ yếu về văn hóa?",
    [
        "A. Bốn cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức sử dụng công cụ sinh hoạt.",
        "B. Hai cách: Theo nghĩa rộng; Theo nghĩa hẹp.",
        "C. Ba cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn.",
        "D. Năm cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức phát triển của công cụ sản xuất; Theo phương thức sử dụng công cụ sinh hoạt."
    ],
    "A. Bốn cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức sử dụng công cụ sinh hoạt."
);

let q158 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với các lĩnh vực khác là gì?",
    [
        "A. Văn hóa không thể đứng ngoài mà phải đứng trong chính trị, kinh tế, xã hội.",
        "B. Văn hóa là một trong bốn lĩnh vực đời sống: chính trị, kinh tế, văn hóa, xã hội.",
        "C. Văn hóa với các lĩnh vực chính trị, kinh tế, xã hội có sự tác động qua lại lẫn nhau.",
        "D. Văn hóa là một mặt trận, cùng góp phần thắng lợi mặt trận chính trị, kinh tế, xã hội."
    ],
    "A. Văn hóa không thể đứng ngoài mà phải đứng trong chính trị, kinh tế, xã hội."
);

let q159 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Văn hóa phải […] cho quốc dân đi”.",
    [
        "A. Soi đường.",
        "B. Dẫn đường.",
        "C. Chỉ đường.",
        "D. Dẫn lối."
    ],
    "A. Soi đường."
);

let q160 = new Question(
    "Câu hỏi: “Đảng phải đặc biệt coi trọng việc tổ chức học tập một cách có hệ thống tư tưởng, đạo đức tác phong của Hồ Chí Minh trong toàn Đảng” được nhấn mạnh trong văn kiện tại:",
    [
        "A. Đại hội đại biểu toàn quốc lần thứ V của Đảng.",
        "B. Đại hội đại biểu toàn quốc lần thứ II của Đảng.",
        "C. Đại hội đại biểu toàn quốc lần thứ IV của Đảng.",
        "D. Đại hội đại biểu toàn quốc lần thứ XI của Đảng."
    ],
    "A. Đại hội đại biểu toàn quốc lần thứ V của Đảng."
);

let q161 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc viết câu mở đầu: “Dân ta phải biết sử ta. Cho tường gốc tích nước nhà Việt Nam”, trong tác phẩm nào?",
    [
        "A. Lịch sử nước ta.",
        "B. Bài ca du kích.",
        "C. Đường kách mệnh.",
        "D. Lịch sử nước nhà."
    ],
    "A. Lịch sử nước ta."
);
let q162 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, nội dung tiếp thu văn hóa nhân loại là:",
    [
        "A. Toàn diện, có chọn lọc, tất cả các mặt, tất cả các khía cạnh.",
        "B. Toàn diện, có hệ thống, tất cả các mặt, tất cả các khía cạnh.",
        "C. Toàn diện gồm Đông, Tây, kim, cổ, tất cả các mặt, các khía cạnh.",
        "D. Chắt lọc tinh hoa văn hóa nhân loại, bài trừ cái cũ, tiếp thu cái mới."
    ],
    "A. Toàn diện, có chọn lọc, tất cả các mặt, tất cả các khía cạnh."
);

let q163 = new Question(
    "Câu hỏi: Luận điểm “Đạo đức cách mạng không phải ở trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố…” của ai?",
    [
        "A. Hồ Chí Minh.",
        "B. Trường Chinh.",
        "C. V.I Lênin.",
        "D. Lê Duẩn."
    ],
    "A. Hồ Chí Minh."
);

let q164 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Hồ Chí Minh đề cập đến đạo đức trong mối quan hệ giữa:",
    [
        "A. Con người với thói quen.",
        "B. Con người với con người.",
        "C. Con người với việc làm.",
        "D. Con người với xã hội."
    ],
    "A. Con người với thói quen."
);

let q165 = new Question(
    "Câu hỏi: Chọn đáp án đúng theo tư tưởng Hồ Chí Minh về lý luận và thực tiễn:",
    [
        "A. Thực tiễn không có lý luận như nhắm mắt mà đi, lý luận không đem ra thực hành thì giống như cái hòm đựng đầy sách.",
        "B. Lý luận là sự tổng kết thực tiễn, được phản ánh vào trong bộ não của con người.",
        "C. Thực tiễn là sự tổng kết lý thuyết, được phản ánh thành lý luận vào trong bộ não của con người.",
        "D. Thực tiễn và lý luận luôn đi với nhau, nếu lý luận và thực tiễn không giống với thì phải điều chỉnh thực tiễn trước."
    ],
    "A. Thực tiễn không có lý luận như nhắm mắt mà đi, lý luận không đem ra thực hành thì giống như cái hòm đựng đầy sách."
);

let q166 = new Question(
    "Câu hỏi: Tinh thần quốc tế trong sáng trong tư tưởng đạo đức của Hồ Chí Minh đã tạo ra một kiểu quan hệ quốc tế mới, đó là:",
    [
        "A. Đối thoại thay cho đối đầu, nhằm kiến tạo một nền văn hóa hòa bình cho nhân loại.",
        "B. Đa phương hóa, đa dạng hóa các quan hệ hữu nghị, hợp tác với nhau cùng phát triển.",
        "C. Chủ nghĩa yêu nước chân chính kết hợp nhuần nhuyễn với chủ nghĩa quốc tế vô sản.",
        "D. Giải quyết tranh chấp, đối đầu bằng hội nghị hiệp thương song phương, đa phương."
    ],
    "A. Đối thoại thay cho đối đầu, nhằm kiến tạo một nền văn hóa hòa bình cho nhân loại."
);

let q167 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Mặt trận dân tộc thống nhất được hợp nhất từ các tổ chức:",
    [
        "A. Mặt trận Việt Nam Độc lập Đồng minh.",
        "B. Mặt trận Tổ quốc Việt Nam.",
        "C. Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.",
        "D. Liên minh các lực lượng Dân tộc Dân chủ và Hòa bình Việt Nam."
    ],
    "A. Mặt trận Việt Nam Độc lập Đồng minh."
);

let q168 = new Question(
    "Câu hỏi: Câu nói: “Người mà không liêm, không bằng súc vật”, là của ai?",
    [
        "A. Khổng Tử.",
        "B. Hồ Chí Minh.",
        "C. Mạnh Tử.",
        "D. Lão Tử."
    ],
    "A. Khổng Tử."
);

let q169 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh mối quan hệ giữa vấn đề dân tộc và vấn đề giai cấp ở các nước thuộc địa là:",
    [
        "A. Giải phóng dân tộc là tiền đề để giải phóng giai cấp.",
        "B. Giải phóng dân tộc và giải phóng giai cấp cần được tiến hành song song.",
        "C. Giải phóng dân tộc không liên quan đến giải phóng giai cấp.",
        "D. Giải phóng giai cấp là tiền đề để giải phóng dân tộc."
    ],
    "A. Giải phóng dân tộc là tiền đề để giải phóng giai cấp."
);

let q170 = new Question(
    "Câu hỏi: Câu nói nào sau đây là của Hồ Chí Minh?",
    [
        "A. Việc học không bao giờ cùng, còn sống còn phải học.",
        "B. Học không biết chán, dạy không biết mỏi.",
        "C. Học, học nữa, học mãi.",
        "D. Học vì ngày mai lập nghiệp."
    ],
    "A. Học, học nữa, học mãi."
);
let q171 = new Question(
    "Câu hỏi: Các luồng tư tưởng dân chủ tư sản, tư tưởng Marx-Lênin được truyền vào Việt Nam vào giai đoạn văn hóa nào?",
    [
        "A. Giai đoạn văn hóa thời kỳ Pháp thuộc.",
        "B. Giai đoạn văn hóa thời kỳ Bắc thuộc.",
        "C. Giai đoạn văn hóa Đại Việt.",
        "D. Giai đoạn văn hóa hiện đại."
    ],
    "A. Giai đoạn văn hóa thời kỳ Pháp thuộc."
);

let q172 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Con tàu mà Hồ Chí Minh thực hiện chuyến đi của mình tên gì, của nước nào?",
    [
        "A. Amiral Latouche-Tréville của Pháp.",
        "B. Latouche-Tréville của Pháp.",
        "C. Latouche-Tréville của Anh.",
        "D. Latouche-Tréville của Mỹ."
    ],
    "A. Amiral Latouche-Tréville của Pháp."
);

let q173 = new Question(
    "Câu hỏi: Các cuộc cách mạng đấu tranh chống Pháp trong giai đoạn cuối thế kỷ XIX đầu thế kỷ XX có đặc điểm chung là gì?",
    [
        "A. Tất cả đều thất bại.",
        "B. Theo con đường phong kiến.",
        "C. Theo con đường dân chủ tư sản.",
        "D. Không đến nơi đến chốn."
    ],
    "A. Tất cả đều thất bại."
);
let q174 = new Question(
    "Câu hỏi: Trong khối đại đoàn kết toàn dân tộc, dân là chỗ dựa vững chắc đồng thời là:",
    [
        "A. Nguồn sức mạnh vô địch của khối đại đoàn kết.",
        "B. Nhân tố quyết định sức mạnh khối đại đoàn kết.",
        "C. Nhân tố quan trọng của khối đại đoàn kết.",
        "D. Cội nguồn sức mạnh của khối đại đoàn kết."
    ],
    "B. Nhân tố quyết định sức mạnh khối đại đoàn kết."
);

let q175 = new Question(
    "Câu hỏi: Đạo đức nghề nghiệp là gì?",
    [
        "A. Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định.",
        "B. Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực.",
        "C. Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do tổ chức có thẩm quyền quy định.",
        "D. Đạo đức nghề nghiệp là những chuẩn mực về nhận thức trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định."
    ],
    "A. Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định."
);

let q176 = new Question(
    "Câu hỏi: Hồ Chí Minh học tập được gì quan trọng ở chủ nghĩa Mác-Lênin?",
    [
        "A. Phương pháp làm việc biện chứng.",
        "B. Học thuộc các luận điểm lí luận.",
        "C. Học tập phương thức triển khai kế hoạch.",
        "D. Vận dụng các luận điểm vào thực tế."
    ],
    "D. Vận dụng các luận điểm vào thực tế."
);

let q177 = new Question(
    "Câu hỏi: “Đưa hổ cửa trước, rước beo cửa sau” là câu đánh giá của ai?",
    [
        "A. Phan Bội Châu.",
        "B. Phan Chu Trinh.",
        "C. Hồ Chí Minh.",
        "D. Hoàng Hoa Thám."
    ],
    "A. Phan Bội Châu."
);

let q178 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
    [
        "A. Sự tu dưỡng đạo đức cá nhân.",
        "B. Tinh thần hiếu học.",
        "C. Quản lý xã hội bằng đạo đức.",
        "D. Tinh thần lễ nghĩa."
    ],
    "A. Sự tu dưỡng đạo đức cá nhân."
);

let q179 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Truyền thống gia đình ông Nguyễn Sinh Sắc là gì?",
    [
        "A. Gia đình nhà nho yêu nước, hiếu học, giàu truyền thống cách mạng và ý chí phấn đấu vươn lên rất cao.",
        "B. Gia đình cần cù, chăm chỉ, ham học hỏi, ham sáng tạo, có ý chí phấn đấu vươn lên làm quan.",
        "C. Gia đình nề nếp, tuân theo chuẩn mực đạo đức xã hội, ham học hỏi, có ý chí phấn đấu vươn lên rất cao.",
        "D. Gia đình cần cù, chăm chỉ, truyền thống làm nông nghiệp, có ý chí phấn đấu vươn lên làm giàu."
    ],
    "A. Gia đình nhà nho yêu nước, hiếu học, giàu truyền thống cách mạng và ý chí phấn đấu vươn lên rất cao."
);

let q180 = new Question(
    "Câu hỏi: Giai đoạn vượt qua thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam của Hồ Chí Minh được tính từ:",
    [
        "A. Từ năm 1931 đến năm 1945.",
        "B. Từ khi sinh ra đến trước 05/06/1911.",
        "C. Từ năm 1911 đến năm 1920.",
        "D. Từ năm 1921 đến năm 1930."
    ],
    "A. Từ năm 1931 đến năm 1945."
);

let q181 = new Question(
    "Câu hỏi: Luận điểm sáng tạo của Hồ Chí Minh về con đường cách mạng Việt Nam được hình thành về cơ bản vào năm nào?",
    [
        "A. Năm 1930.",
        "B. Năm 1920.",
        "C. Năm 1941.",
        "D. Năm 1925."
    ],
    "A. Năm 1930."
);

let q182 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được […]”.",
    [
        "A. Hoàn toàn độc lập.",
        "B. Nhanh chóng độc lập.",
        "C. Thắng lợi nhanh chóng.",
        "D. Hoàn toàn giải phóng."
    ],
    "A. Hoàn toàn độc lập."
);
let q183 = new Question(
    "Câu hỏi: Nguyễn Tất Thành dạy học ở trường Dục Thanh trong khoảng thời gian từ:",
    [
        "A. Từ 09/1910 đến 02/1911.",
        "B. Từ 09/1908 đến 09/1909.",
        "C. Từ 11/1908 đến 02/1909.",
        "D. Từ 09/1909 đến 02/1910."
    ],
    "A. Từ 09/1910 đến 02/1911."
);

let q184 = new Question(
    "Câu hỏi: Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh KHÔNG bao gồm:",
    [
        "A. Tài nguyên thiên nhiên.",
        "B. Chủ nghĩa yêu nước Việt Nam.",
        "C. Tinh thần đoàn kết, ý thức tự lực tự cường.",
        "D. Văn hóa truyền thống Việt Nam."
    ],
    "A. Tài nguyên thiên nhiên."
);

let q185 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Độc lập dân tộc trong tư tưởng Hồ Chí Minh phải:",
    [
        "A. Gắn liền với thống nhất và toàn vẹn lãnh thổ.",
        "B. Gắn liền với độc lập của các dân tộc thuộc địa.",
        "C. Gắn liền với tự do, hạnh phúc của nhân dân.",
        "D. Độc lập thật sự, hoàn toàn và triệt để."
    ],
    "B. Gắn liền với độc lập của các dân tộc thuộc địa."
);

let q186 = new Question(
    "Câu hỏi: Cuốn “Đường kách mệnh” của Nguyễn Ái Quốc được tái xuất bản tại:",
    [
        "A. Trung Quốc.",
        "B. Pháp.",
        "C. Việt Nam.",
        "D. Liên Xô."
    ],
    "A. Trung Quốc."
);

let q187 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người thống nhất nhau là tư tưởng cách mạng [...]”.",
    [
        "A. Triệt để nhất.",
        "B. An toàn nhất.",
        "C. Phù hợp nhất.",
        "D. Thông minh nhất."
    ],
    "A. Triệt để nhất."
);

let q188 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Quan điểm của Hồ Chí Minh về nguyên tắc xây dựng đạo đức cách mạng:",
    [
        "A. Tạo thành phong trào quần chúng rộng rãi.",
        "B. Nói đi đôi với làm, nêu gương về đạo đức.",
        "C. Xây đi đôi với chống.",
        "D. Tu dưỡng đạo đức suốt đời."
    ],
    "A. Tạo thành phong trào quần chúng rộng rãi."
);

let q189 = new Question(
    "Câu hỏi: Tư tưởng cốt lõi trong tư tưởng Hồ Chí Minh về cách mạng Việt Nam là gì?",
    [
        "A. Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
        "B. Giải phóng dân tộc, giải phóng giai cấp.",
        "C. Giải phóng dân tộc, giải phóng con người.",
        "D. Kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    ],
    "A. Độc lập dân tộc gắn liền với chủ nghĩa xã hội."
);

let q190 = new Question(
    "Câu hỏi: Khái niệm tư tưởng Hồ Chí Minh được bổ sung và hoàn thiện tại:",
    [
        "A. Đại hội đại biểu toàn quốc lần thứ XI của Đảng.",
        "B. Đại hội đại biểu toàn quốc lần thứ VII của Đảng.",
        "C. Đại hội đại biểu toàn quốc lần thứ IX của Đảng.",
        "D. Đại hội đại biểu toàn quốc lần thứ X của Đảng."
    ],
    "A. Đại hội đại biểu toàn quốc lần thứ XI của Đảng."
);

let q191 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc nhận được lời mời tham dự Quốc tế III tại Moscow vào thời gian nào?",
    [
        "A. Tháng 06 năm 1923.",
        "B. Tháng 12 năm 1920.",
        "C. Tháng 02 năm 1921.",
        "D. Tháng 12 năm 1922."
    ],
    "A. Tháng 06 năm 1923."
);

let q192 = new Question(
    "Câu hỏi: Người khởi xướng và lãnh đạo phong trào Đông Du (1905 - 1909) là ai?",
    [
        "A. Phan Bội Châu.",
        "B. Phan Chu Trinh.",
        "C. Lương Văn Can.",
        "D. Nguyễn Thái Học."
    ],
    "A. Phan Bội Châu."
);

let q193 = new Question(
    "Câu hỏi: Trong Nghị quyết 24C/18.6.5 của khóa họp 24 Đại hội đồng UNESCO, Hồ Chí Minh được ghi nhận là:",
    [
        "A. Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam.",
        "B. Anh hùng giải phóng dân tộc của Việt Nam, Nhà văn hóa lớn của thế giới.",
        "C. Anh hùng cứu nước của dân tộc Việt Nam và Danh nhân văn hóa thế giới.",
        "D. Anh hùng giải phóng của dân tộc và là Nhà văn hóa lớn của thế giới."
    ],
    "A. Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam."
);

let q194 = new Question(
    "Câu hỏi: Chủ nghĩa dân tộc trong tư tưởng Hồ Chí Minh là chủ nghĩa dân tộc:",
    [
        "A. Chân chính.",
        "B. Trong sáng.",
        "C. Cực đoan, hẹp hòi.",
        "D. Sô vanh nước lớn."
    ],
    "A. Chân chính."
);

let q195 = new Question(
    "Câu hỏi: Câu nói “Dù phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập” của Hồ Chí Minh vào thời gian nào?",
    [
        "A. Tháng 08/1945.",
        "B. Tháng 05/1941.",
        "C. Tháng 08/1942.",
        "D. Tháng 12/1944."
    ],
    "A. Tháng 08/1945."
);

let q196 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, cách mạng giải phóng dân tộc phải đi theo con đường:",
    [
        "A. Con đường cách mạng vô sản.",
        "B. Con đường cách mạng dân chủ tư sản.",
        "C. Con đường cách mạng tư sản.",
        "D. Con đường cách mạng phong kiến."
    ],
    "A. Con đường cách mạng vô sản."
);

let q197 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, thực chất của giải phóng giai cấp là:",
    [
        "A. Xóa bỏ giai cấp bóc lột với tư cách là giai cấp thống trị xã hội.",
        "B. Tiêu diệt cá nhân những con người thuộc giai cấp bóc lột.",
        "C. Thay thế giai cấp thống trị này bằng giai cấp thống trị khác.",
        "D. Giải phóng giai cấp vô sản trên toàn thế giới."
    ],
    "A. Xóa bỏ giai cấp bóc lột với tư cách là giai cấp thống trị xã hội."
);

let q198 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    [
        "A. Được tiến hành chủ động và sáng tạo.",
        "B. Dựa vào sự thắng lợi của cách mạng vô sản ở chính quốc.",
        "C. Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác.",
        "D. Dựa vào sự giúp đỡ của các nước xã hội chủ nghĩa."
    ],
    "A. Được tiến hành chủ động và sáng tạo."
);

let q199 = new Question(
    "Câu hỏi: Cuối thế kỷ XIX đầu thế kỷ XX ở thế giới, chủ nghĩa tư bản phát triển như thế nào?",
    [
        "A. Phát triển từ tự do cạnh tranh sang đế quốc chủ nghĩa.",
        "B. Phát triển mạnh thành các mạng lưới xuyên quốc gia.",
        "C. Phát triển thành các loại hình: cacten, xanhdica, congxoocxiom.",
        "D. Phát triển thành các tổ chức độc quyền nhà nước."
    ],
    "A. Phát triển từ tự do cạnh tranh sang đế quốc chủ nghĩa."
);

let q200 = new Question(
    "Câu hỏi: Vai trò lãnh đạo của giai cấp công nhân trong cách mạng Việt Nam được quyết định bởi:",
    [
        "A. Đặc tính của giai cấp công nhân.",
        "B. Ý muốn của Đảng Cộng sản.",
        "C. Số lượng giai cấp công nhân.",
        "D. Ý muốn của giai cấp công nhân."
    ],
    "A. Đặc tính của giai cấp công nhân."
);
let q201 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Đảng có vững, [...] mới thành công, cũng như người cầm lái có vững thì […]”.",
    [
        "A. Cách mạng; thuyền mới chạy.",
        "B. Cách mạng; thuyền có thể chạy.",
        "C. Cách mạng; thuyền có thể chạy.",
        "D. Cách mạng; thuyền mới chạy."
    ],
    "A. Cách mạng; thuyền mới chạy."
);

let q202 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là của giai cấp công nhân, đồng thời là của nhân dân lao động và cả dân tộc Việt Nam, là xác định:",
    [
        "A. Bản chất cách mạng của Đảng.",
        "B. Vị thế cầm quyền của Đảng.",
        "C. Nội dung ra đời của Đảng.",
        "D. Nhiệm vụ lịch sử của Đảng."
    ],
    "A. Bản chất cách mạng của Đảng."
);

let q203 = new Question(
    "Câu hỏi: Mối quan hệ giữa nội lực và ngoại lực trong thời kỳ quá độ lên CNXH theo quan điểm của Hồ Chí Minh là gì?",
    [
        "A. Nội lực là chính, ngoại lực là quan trọng.",
        "B. Nội lực là quan trọng nhất, không cần ngoại lực.",
        "C. Ngoại lực trong thời kì đầu là cần thiết.",
        "D. Nội lực và ngoại lực quan trọng như nhau."
    ],
    "A. Nội lực là chính, ngoại lực là quan trọng."
);

let q204 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Tất cả các cơ quan nhà nước đều phải dựa vào […], liên hệ chặt chẽ với […], lắng nghe ý kiến và chịu sự kiểm soát của […]”.",
    [
        "A. Nhân dân.",
        "B. Công dân.",
        "C. Quốc hội.",
        "D. Chính phủ."
    ],
    "A. Nhân dân."
);

let q205 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Nhà nước do dân theo tư tưởng Hồ Chí Minh là:",
    [
        "A. Dân có quyền làm những gì mà pháp luật không cấm và đạo đức cho phép.",
        "B. Đại biểu của nhà nước do dân lựa chọn, phải liên hệ chặt chẽ với dân.",
        "C. Dân ủng hộ, giúp đỡ, đóng thuế để nhà nước chi tiêu, hoạt động.",
        "D. Dân kiểm soát, giám sát, bãi miễn nếu đại biểu không làm tròn sự ủy thác của dân."
    ],
    "A. Dân có quyền làm những gì mà pháp luật không cấm và đạo đức cho phép."
);

let q206 = new Question(
    "Câu hỏi: Theo luật Việt Nam quy định, công dân có quyền ứng cử vào đại biểu Quốc hội khi:",
    [
        "A. Đủ 21 tuổi.",
        "B. Đủ 18 tuổi.",
        "C. Đủ 19 tuổi.",
        "D. Đủ 20 tuổi."
    ],
    "A. Đủ 21 tuổi."
);

let q207 = new Question(
    "Câu hỏi: Động lực chủ đạo của sự phát triển đất nước ta hiện nay là gì?",
    [
        "A. Đại đoàn kết dân tộc.",
        "B. Sự ủng hộ quốc tế.",
        "C. Khoa học công nghệ.",
        "D. Nguồn vốn đầu tư."
    ],
    "A. Đại đoàn kết dân tộc."
);

let q208 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, nguyên tắc cơ bản nhất trong đoàn kết quốc tế là gì?",
    [
        "A. Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.",
        "B. Đoàn kết trên cơ sở không dùng vũ lực và đe dọa dùng vũ lực.",
        "C. Đoàn kết trên cơ sở hợp tác đa phương và các bên cùng có lợi.",
        "D. Đoàn kết trên cơ sở đảm bảo sự bình đẳng quốc gia; có đi, có lại."
    ],
    "A. Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình."
);
let q209 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Sức mạnh của dân tộc Việt Nam là:",
    [
        "A. Đa dạng tộc người.",
        "B. Chủ nghĩa yêu nước.",
        "C. Ý thức tự lực, tự cường.",
        "D. Tinh thần đoàn kết."
    ],
    "A. Đa dạng tộc người."
);

let q210 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, vì sao giai cấp nông dân không thể lãnh đạo được cách mạng Việt Nam?",
    [
        "A. Không có tư tưởng độc lập, không đại diện cho phương thức sản xuất tiên tiến.",
        "B. Lực lượng đông nhưng không có tiền đề tư tưởng, lý luận cách mạng triệt để.",
        "C. Không có chính đảng, không thực hiện được đoàn kết giai cấp, tầng lớp khác.",
        "D. Không có phương tiện tổ chức chiến tranh hiện đại, không có đường lối đúng."
    ],
    "A. Không có tư tưởng độc lập, không đại diện cho phương thức sản xuất tiên tiến."
);

let q211 = new Question(
    "Câu hỏi: “Mục đích của Đảng Lao động Việt Nam có thể gộp trong tám chữ…”, Hồ Chí Minh tuyên bố này trong sự kiện nào? Thời gian nào?",
    [
        "A. Lời kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951.",
        "B. Kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/02/1930.",
        "C. Kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 07/02/1930.",
        "D. Lời mở đầu buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951."
    ],
    "A. Lời kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951."
);

let q212 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Sức mạnh đoàn kết quốc tế trong tư tưởng Hồ Chí Minh, bao gồm:",
    [
        "A. Liên minh giữa nhân dân thế giới về mục tiêu phản đối chiến tranh phi nghĩa.",
        "B. Liên minh chiến đấu giữa lao động ở thuộc địa với lao động ở chính quốc.",
        "C. Sức mạnh của giai cấp vô sản, cách mạng vô sản và Đảng Cộng sản.",
        "D. Sức mạnh của ba dòng thác cách mạng và tiến bộ khoa học công nghệ."
    ],
    "A. Liên minh giữa nhân dân thế giới về mục tiêu phản đối chiến tranh phi nghĩa."
);

let q213 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Chính sách ngoại giao của Chính phủ thì chỉ có một điều tức là thân thiện với […] trên thế giới để giữ gìn hòa bình”.",
    [
        "A. Tất cả các nước dân chủ.",
        "B. Các nước xã hội chủ nghĩa.",
        "C. Các nước cộng sản chủ nghĩa.",
        "D. Mọi nước dân chủ."
    ],
    "A. Tất cả các nước dân chủ."
);

let q214 = new Question(
    "Câu hỏi: “Đại đoàn kết dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn xây dựng và bảo vệ Tổ quốc”, được trích trong văn kiện:",
    [
        "A. Đại hội Đảng lần thứ XII.",
        "B. Đại hội Đảng lần thứ IX.",
        "C. Đại hội Đảng lần thứ X.",
        "D. Đại hội Đảng lần thứ XI."
    ],
    "A. Đại hội Đảng lần thứ XII."
);

let q215 = new Question(
    "Câu hỏi: “Ỷ Pháp cầu tiến bộ chẳng khác nào xin giặc rủ lòng thương” là câu Nguyễn Ái Quốc nhận xét về chủ trương cứu nước của ai?",
    [
        "A. Phan Chu Trinh.",
        "B. Phan Bội Châu.",
        "C. Hoàng Hoa Thám.",
        "D. Nguyễn Thái Học."
    ],
    "A. Phan Chu Trinh."
);

let q216 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Cống hiến của Hồ Chí Minh trong lĩnh vực văn hóa được thể hiện:",
    [
        "A. Xây dựng nền văn hóa mới Việt Nam.",
        "B. Xây dựng con người mới.",
        "C. Sáng tạo văn hóa văn nghệ.",
        "D. Xác lập hệ thống quan điểm về văn hóa."
    ],
    "C. Sáng tạo văn hóa văn nghệ."
);

let q217 = new Question(
    "Câu hỏi: Hồ Chí Minh lần đầu tiên đưa ra khái niệm về văn hóa theo nghĩa rộng vào thời gian nào? Ở đâu?",
    [
        "A. Tháng 08/1943, trong nhà tù của Tưởng Giới Thạch tại Trung Quốc.",
        "B. Tháng 07/1925, trong cuốn “Đường kách mệnh” tại Trung Quốc.",
        "C. Tháng 02/1930, trong “Cương lĩnh chính trị Đảng” tại Trung Quốc.",
        "D. Tháng 06/1931, trong nhà tù của thực dân Anh tại Hồng Kông."
    ],
    "A. Tháng 08/1943, trong nhà tù của Tưởng Giới Thạch tại Trung Quốc."
);

let q218 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, chức năng cơ bản của văn hóa là:",
    [
        "A. Bồi dưỡng lý luận chính trị, rèn luyện tác phong công tác, tư duy tự chủ.",
        "B. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp của con người.",
        "C. Bồi dưỡng những phẩm chất tốt đẹp, hướng con người đến chân, thiện, mỹ.",
        "D. Mở rộng hiểu biết của con người, nâng cao dân trí, xóa mù chữ cho dân."
    ],
    "A. Bồi dưỡng lý luận chính trị, rèn luyện tác phong công tác, tư duy tự chủ."
);

let q219 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc viết câu mở đầu: “Dân ta phải biết sử ta. Cho tường gốc tích nước nhà Việt Nam”, vào thời gian nào?",
    [
        "A. Năm 1941.",
        "B. Năm 1925.",
        "C. Năm 1930.",
        "D. Năm 1943."
    ],
    "A. Năm 1941."
);

let q220 = new Question(
    "Câu hỏi: Đặc trưng cốt lõi nhất trong tư tưởng đạo đức của Hồ Chí Minh là gì?",
    [
        "A. Chủ nghĩa nhân đạo chiến đấu.",
        "B. Lòng yêu thương người.",
        "C. Lòng yêu nước, thương dân.",
        "D. Sự quan tâm đến con người."
    ],
    "C. Lòng yêu nước, thương dân."
);

let q221 = new Question(
    "Câu hỏi: “Mọi việc thành hay bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng, hay là không”, câu nói của Hồ Chí Minh trích trong tác phẩm nào?",
    [
        "A. Người cán bộ cách mạng.",
        "B. Sửa đổi lối làm việc.",
        "C. Đạo đức cách mạng.",
        "D. Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân."
    ],
    "A. Người cán bộ cách mạng."
);

let q222 = new Question(
    "Câu hỏi: Theo tư tưởng Hồ Chí Minh, ai là người chủ tương lai của nước nhà?",
    [
        "A. Thanh niên.",
        "B. Công nhân.",
        "C. Thiếu niên.",
        "D. Nhi đồng."
    ],
    "A. Thanh niên."
);

let q223 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đời sống mới bao gồm những mặt nào?",
    [
        "A. Đạo đức mới, lối sống mới, nếp sống mới.",
        "B. Đạo đức mới, nếp sống mới và cách sống mới.",
        "C. Đạo đức mới và lối sống mới; cách sống mới.",
        "D. Nếp sống mới, lối sống mới và tư tưởng mới."
    ],
    "A. Đạo đức mới, lối sống mới, nếp sống mới."
);

let q224 = new Question(
    "Câu hỏi: Văn minh là khái niệm:",
    [
        "A. Thiên về giá trị vật chất - kỹ thuật và chỉ trình độ phát triển.",
        "B. Thiên về giá trị tinh thần và chỉ trình độ phát triển.",
        "C. Thiên về giá trị tinh thần và có bề dày lịch sử.",
        "D. Thiên về giá trị vật chất và có bề dày lịch sử."
    ],
    "A. Thiên về giá trị vật chất - kỹ thuật và chỉ trình độ phát triển."
);

let q225 = new Question(
    "Câu hỏi: Hoạt động đấu tranh đầu tiên của Hồ Chí Minh là gì?",
    [
        "A. Phiên dịch ra tiếng Pháp những đòi hỏi của cuộc biểu tình để các viên chức thực dân có thể đọc nó.",
        "B. Cùng đoàn biểu tình của nông dân ở Huế biểu tình chống chế độ tham nhũng và mức thuế cao.",
        "C. Cùng học sinh trường Quốc học Huế biểu tình chống chế độ tham nhũng và mức thuế cao.",
        "D. Phiên dịch ra tiếng Anh những đòi hỏi của cuộc biểu tình để các viên chức thực dân có thể đọc nó."
    ],
    "A. Phiên dịch ra tiếng Pháp những đòi hỏi của cuộc biểu tình để các viên chức thực dân có thể đọc nó."
);

let q226 = new Question(
    "Câu hỏi: Các quy tắc, chuẩn mực đạo đức luôn biến đổi theo:",
    [
        "A. Sự vận động và phát triển của con người.",
        "B. Sự vận động.",
        "C. Sự phát triển của xã hội.",
        "D. Đời sống con người."
    ],
    "A. Sự vận động và phát triển của con người."
);

let q227 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Làm cách mệnh rồi thì quyền trao cho […] chớ để trong tay một bọn ít người”.",
    [
        "A. Dân chúng số nhiều.",
        "B. Giai cấp công nhân.",
        "C. Quần chúng nhân dân.",
        "D. Người dân lao động."
    ],
    "C. Quần chúng nhân dân."
);

let q228 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Trong quá trình lãnh đạo nhà nước, Hồ Chí Minh nhắc nhở cần phải đề phòng và khắc phục những tiêu cực:",
    [
        "A. Bệnh chạy theo thành tích.",
        "B. Kiêu ngạo, đặc quyền, đặc lợi.",
        "C. Tư túng, chia rẽ, bè phái.",
        "D. Tham ô, lãng phí, quan liêu."
    ],
    "A. Bệnh chạy theo thành tích."
);

let q229 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Ý nghĩa học tập môn học Tư tưởng Hồ Chí Minh:",
    [
        "A. Xây dựng bản lĩnh cách mạng, đấu tranh chống giặc ngoại xâm.",
        "B. Góp phần nâng cao năng lực tư duy lý luận.",
        "C. Giáo dục và thực hành đạo đức cách mạng, củng cố niềm tin vào khoa học, bồi dưỡng lòng yêu nước.",
        "D. Xây dựng, rèn luyện phương pháp và phong cách công tác."
    ],
    "A. Xây dựng bản lĩnh cách mạng, đấu tranh chống giặc ngoại xâm."
);

let q230 = new Question(
    "Câu hỏi: Khi làm việc tại New York, Hồ Chí Minh đã thấy được điều quan trọng ảnh hưởng đến tư tưởng của Người là gì?",
    [
        "A. Những người dân nhập cư mặc nhiên được hưởng những quyền hợp pháp mà người Việt Nam phải đi xin của Pháp.",
        "B. Nhiều dân tộc nhập cư cùng sinh sống với nhau, đoàn kết giúp nhau cùng phát triển.",
        "C. Không có sự phân biệt chủng tộc ở đây, Vàng, Đỏ, Trắng, Đen đều là anh em.",
        "D. Một khu phố ngự trị bởi người dân nhập cư."
    ],
    "C. Không có sự phân biệt chủng tộc ở đây, Vàng, Đỏ, Trắng, Đen đều là anh em."
);
let q51 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đạo đức là:",
    [
        "A. Gốc của người cách mạng.",
        "B. Gốc rễ của con người.",
        "C. Yêu cầu của người cách mạng.",
        "D. Phẩm chất của Đảng viên."
    ],
    "A. Gốc của người cách mạng."
);

let q52 = new Question(
    "Câu hỏi: “Mọi việc thành hay bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng, hay là không”, câu nói của Hồ Chí Minh viết trong thời gian nào?",
    [
        "A. Năm 1955.",
        "B. Năm 1947.",
        "C. Năm 1958.",
        "D. Năm 1969."
    ],
    "A. Năm 1955."
);

let q53 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Bản chất con người theo tư tưởng Hồ Chí Minh là gì?",
    [
        "A. Tổng hợp các quan hệ xã hội từ rộng đến hẹp.",
        "B. Sản phẩm của sự tiến hóa tự nhiên.",
        "C. Sự thống nhất cả hai mặt tự nhiên và xã hội.",
        "D. Tổng hòa các mối quan hệ trong xã hội."
    ],
    "A. Tổng hợp các quan hệ xã hội từ rộng đến hẹp."
);
let q54 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, để phát huy sức mạnh cá nhân người lao động, cần phải tác động vào:",
    [
        "A. Nhu cầu và lợi ích của con người.",
        "B. Động lực chính trị, tinh thần của con người.",
        "C. Sở thích của cá nhân của con người.",
        "D. Nguyện vọng và mong muốn của họ."
    ],
    "A. Nhu cầu và lợi ích của con người."
);

let q55 = new Question(
    "Câu hỏi: Mục tiêu của chức năng giáo dục là gì?",
    [
        "A. Hoàn thiện nhân cách con người.",
        "B. Nâng cao học thức.",
        "C. Giúp con người vươn đến CHÂN – THIỆN – MỸ.",
        "D. Trở thành người có ích cho xã hội."
    ],
    "A. Hoàn thiện nhân cách con người."
);

let q56 = new Question(
    "Câu hỏi: Đối với Hồ Chí Minh để nghiên cứu, kế thừa và phát triển lý luận cách mạng Việt Nam phải xuất phát từ:",
    [
        "A. Thực tiễn cách mạng Việt Nam.",
        "B. Thực tiễn cách mạng.",
        "C. Thực tiễn thế giới.",
        "D. Thực tiễn cách mạng phương Đông và phương Tây."
    ],
    "A. Thực tiễn cách mạng Việt Nam."
);
let q57 = new Question(
    "Câu hỏi: Phương thức xây dựng khối đại đoàn kết dân tộc là làm tốt công tác vận động quần chúng. Đây là phương thức công tác:",
    [
        "A. Dân vận.",
        "B. Tuyên giáo.",
        "C. Tuyên vận.",
        "D. Tuyên truyền."
    ],
    "A. Dân vận."
);

let q58 = new Question(
    "Câu hỏi: Hồ Chí Minh ra đi tìm đường cứu nước vào thời gian nào? Ở đâu?",
    [
        "A. Ngày 05/06/1911; Bến cảng Nhà Rồng - Sài Gòn.",
        "B. Năm 1911; Thành phố Hồ Chí Minh.",
        "C. Ngày 05/06/1911; Thành phố Sài Gòn.",
        "D. Ngày 05/06/1911; Bến cảng Nhà Rồng – Hương cảng."
    ],
    "A. Ngày 05/06/1911; Bến cảng Nhà Rồng - Sài Gòn."
);

let q59 = new Question(
    "Câu hỏi: Lý do chính của việc Nguyễn Ái Quốc đến Pháp là gì?",
    [
        "A. Để vận động nhân dân Pháp ủng hộ cách mạng Việt Nam.",
        "B. Muốn được thấy tư tưởng nhân quyền và dân quyền được thực hiện như thế nào tại Pháp và tại Việt Nam.",
        "C. Vì nguồn gốc mọi đau khổ của nhân dân Việt Nam là ở tại “chính quốc”.",
        "D. Vì mong muốn một nền giáo dục tốt hơn ở Pháp và không nhìn thấy được cơ hội tài chính ở Việt Nam vào thời kỳ đó."
    ],
    "A. Để vận động nhân dân Pháp ủng hộ cách mạng Việt Nam."
);

let q60 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, chủ thể của khối đại đoàn kết dân tộc là gì?",
    [
        "A. Con người Việt Nam cụ thể và tập hợp đông đảo quần chúng nhân dân.",
        "B. Toàn bộ những con người Việt Nam cụ thể sinh sống tại trong nước.",
        "C. Toàn bộ những con người Việt Nam cụ thể sinh sống tại nước ngoài.",
        "D. Toàn bộ những con người Việt Nam sinh sống trong nước và nước ngoài."
    ],
    "A. Con người Việt Nam cụ thể và tập hợp đông đảo quần chúng nhân dân."
);

let q61 = new Question(
    "Câu hỏi: Vở kịch “Con Rồng tre” được Nguyễn Ái Quốc viết nhân dịp vua Khải Định sang Pháp vào thời gian nào?",
    [
        "A. Tháng 05 năm 1922.",
        "B. Tháng 07 năm 1920.",
        "C. Tháng 05 năm 1925.",
        "D. Tháng 07 năm 1927."
    ],
    "A. Tháng 05 năm 1922."
);

let q62 = new Question(
    "Câu hỏi: Theo tư tưởng Hồ Chí Minh, cán bộ nhà nước là gì của nhân dân?",
    [
        "A. Công bộc.",
        "B. Người làm công.",
        "C. Người quản lý.",
        "D. Người phục vụ."
    ],
    "A. Công bộc."
);

let q63 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất theo tư tưởng Hồ Chí Minh về nguyên tắc ngoại giao:",
    [
        "A. Vừa cứng rắn về nguyên tắc, vừa mềm dẻo về sách lược.",
        "B. Phải cứng rắn về nguyên tắc, nhân nhượng về lợi ích.",
        "C. Phải mềm dẻo về sách lược, có thể nhân nhượng về lợi ích.",
        "D. Dĩ bất biến, ứng vạn biến."
    ],
    "A. Vừa cứng rắn về nguyên tắc, vừa mềm dẻo về sách lược."
);
let q64 = new Question(
    "Câu hỏi: Chức năng nào của văn hóa giúp xã hội định hướng các chuẩn mực và làm động lực cho sự phát triển?",
    [
        "A. Chức năng điều chỉnh xã hội.",
        "B. Chức năng tổ chức.",
        "C. Chức năng giao tiếp.",
        "D. Chức năng giáo dục."
    ],
    "A. Chức năng điều chỉnh xã hội."
);

let q65 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa tam dân của Tôn Trung Sơn đối với nước ta là?",
    [
        "A. Chính sách phù hợp với điều kiện của nước ta.",
        "B. Giúp người dân Việt Nam chống phong kiến.",
        "C. Giúp người dân Việt Nam đấu tranh vì tự do.",
        "D. Đem lại độc lập, tự do cho người dân Việt Nam."
    ],
    "A. Chính sách phù hợp với điều kiện của nước ta."
);

let q66 = new Question(
    "Câu hỏi: Hồ Chí Minh đánh giá thực tế phong trào cách mạng ở Mỹ và Pháp?",
    [
        "A. Thành công không đến nơi.",
        "B. Thành công triệt để.",
        "C. Chưa thực sự thành công.",
        "D. Thành công một nửa."
    ],
    "C. Chưa thực sự thành công."
);

let q67 = new Question(
    "Câu hỏi: Người thầy giáo đầu tiên của Nguyễn Sinh Cung là ai?",
    [
        "A. Lê Văn Miến.",
        "B. Vương Thúc Quý.",
        "C. Phan Bội Châu.",
        "D. Nguyễn Sinh Sắc."
    ],
    "B. Vương Thúc Quý."
);

let q68 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc đọc “Sơ thảo lần thứ nhất vấn đề dân tộc và thuộc địa” vào thời gian nào? Ở đâu?",
    [
        "A. Tháng 07/1920 tại Paris.",
        "B. Tháng 07/1920 tại Moscow.",
        "C. Tháng 02/1917 tại New York.",
        "D. Tháng 07/1920 tại London."
    ],
    "A. Tháng 07/1920 tại Paris."
);
let q69 = new Question(
    "Câu hỏi: Theo tư tưởng Hồ Chí Minh, mọi việc thành công hay thất bại là do:",
    [
        "A. Cán bộ tốt hay kém.",
        "B. Đường lối lãnh đạo đúng hay sai.",
        "C. Công tác hoạch định cán bộ.",
        "D. Đường lối đúng hay sai."
    ],
    "A. Cán bộ tốt hay kém."
);

let q70 = new Question(
    "Câu hỏi: Hồ Chí Minh nói: “Tôi cố gắng là học trò nhỏ của các vị ấy”. Các vị ấy là ai?",
    [
        "A. Khổng Tử; Giêxu; Mác; Tôn Dật Tiên.",
        "B. Khổng Tử; Đạt Ma; Mác; Lênin.",
        "C. Mạnh Tử; Lão Tử; Khổng Tử; Mác.",
        "D. Lão Tử; Khổng Tử; Mác; Lênin."
    ],
    "D. Lão Tử; Khổng Tử; Mác; Lênin."
);

let q71 = new Question(
    "Câu hỏi: Khi học trường Quốc tế Lênin, Hồ Chí Minh đã lấy bí danh là gì?",
    [
        "A. Lin.",
        "B. Victor Lebon.",
        "C. Nilopxki.",
        "D. Polopxki."
    ],
    "A. Lin."
);

let q72 = new Question(
    "Câu hỏi: Vấn đề dân tộc độc lập trong tư tưởng Hồ Chí Minh là vấn đề dân tộc:",
    [
        "A. Thuộc địa.",
        "B. Phong kiến.",
        "C. Tư sản.",
        "D. Độc lập."
    ],
    "D. Độc lập."
);

let q73 = new Question(
    "Câu hỏi: Trong tư tưởng Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết, trước hết của cách mạng Việt Nam là gì?",
    [
        "A. Giải phóng dân tộc.",
        "B. Giải phóng giai cấp công nhân.",
        "C. Giải phóng con người.",
        "D. Người cày phải có ruộng."
    ],
    "A. Giải phóng dân tộc."
);

let q74 = new Question(
    "Câu hỏi: Mặt trận Việt Nam độc lập đồng minh (Việt Minh) được thành lập vào thời gian nào?",
    [
        "A. Ngày 19/05/1941.",
        "B. Ngày 19/05/1940.",
        "C. Ngày 19/05/1942.",
        "D. Ngày 19/05/1945."
    ],
    "A. Ngày 19/05/1941."
);

let q75 = new Question(
    "Câu hỏi: Để chỉ chủ nghĩa tư bản, Hồ Chí Minh sử dụng hình tượng nào?",
    [
        "A. Con đĩa hai vòi.",
        "B. Con bạch tuộc.",
        "C. Hai cánh của con chim.",
        "D. Con chim đại bàng."
    ],
    "B. Con bạch tuộc."
);

let q76 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Giải phóng dân tộc theo tư tưởng Hồ Chí Minh là:",
    [
        "A. Đánh đổ địa chủ phong kiến đem lại ruộng đất cho nhân dân.",
        "B. Đánh đổ ách áp bức, thống trị của đế quốc thực dân giành độc lập dân tộc.",
        "C. Hình thành nhà nước dân tộc độc lập của dân, do dân, vì dân.",
        "D. Lựa chọn con đường phát triển của dân tộc phù hợp với xu thế của thời đại."
    ],
    "A. Đánh đổ địa chủ phong kiến đem lại ruộng đất cho nhân dân."
);

let q77 = new Question(
    "Câu hỏi: Nguyễn Ái Quốc nhận nhiệm vụ quốc tế đầu tiên của Quốc tế III, lấy tên là gì?",
    [
        "A. Lý Thụy.",
        "B. Lin.",
        "C. Nguyễn Ba.",
        "D. Hồ Chí Minh."
    ],
    "A. Lý Thụy."
);

let q78 = new Question(
    "Câu hỏi: Pháp bắt đầu tiến công xâm lược Việt Nam vào thời gian nào? Ở đâu?",
    [
        "A. Năm 1858, tại cảng Đà Nẵng.",
        "B. Năm 1885, tại cảng Đà Nẵng.",
        "C. Năm 1860, tại Sơn Trà - Quảng Nam Đà Nẵng.",
        "D. Năm 1858, tại đồn An Hải - Sơn Trà - Quảng Nam Đà Nẵng."
    ],
    "A. Năm 1858, tại cảng Đà Nẵng."
);

let q79 = new Question(
    "Câu hỏi: Triều đình nhà Nguyễn thực hiện chính sách gì trong giai đoạn cuối thế kỷ XIX đầu thế kỷ XX?",
    [
        "A. Chính sách hiệp thương với Pháp.",
        "B. Chính sách mở cửa giao thương.",
        "C. Chính sách bế quan tỏa cảng.",
        "D. Chính sách mậu dịch quốc doanh."
    ],
    "C. Chính sách bế quan tỏa cảng."
);

let q80 = new Question(
    "Câu hỏi: Người khởi xướng và lãnh đạo phong trào Đông kinh nghĩa thục (1907) là:",
    [
        "A. Phan Bội Châu.",
        "B. Phan Chu Trinh.",
        "C. Lương Văn Can.",
        "D. Nguyễn Thái Học."
    ],
    "C. Lương Văn Can."
);

let q81 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, kẻ thù cần phải đánh đổ trong cách mạng giải phóng là gì?",
    [
        "A. Chủ nghĩa cá nhân.",
        "B. Đế quốc, thực dân và tay sai của chúng.",
        "C. Chủ nghĩa tư bản, chủ nghĩa đế quốc.",
        "D. Nghèo nàn, dốt nát, lạc hậu."
    ],
    "A. Chủ nghĩa cá nhân."
);

let q82 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Toàn quốc đồng bào hãy đứng dậy […] mà tự giải phóng cho ta”.",
    [
        "A. Dựa vào sự giúp đỡ quốc tế.",
        "B. Dựa vào sự đoàn kết.",
        "C. Đem sức ta.",
        "D. Dưới sự lãnh đạo của Đảng."
    ],
    "C. Đem sức ta."
);

let q83 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, cách mạng giải phóng dân tộc thuộc địa muốn giành được thắng lợi triệt để phải:",
    [
        "A. Dựa trên phương pháp cách mạng của chủ nghĩa Mác – Lênin.",
        "B. Dựa vào sự thắng lợi của cách mạng vô sản ở chính quốc.",
        "C. Thực hiện bằng con đường bạo lực cách mạng.",
        "D. Kết hợp đấu tranh quân sự với đấu tranh ngoại giao."
    ],
    "A. Dựa trên phương pháp cách mạng của chủ nghĩa Mác – Lênin."
);

let q84 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Để tranh thủ sự giúp đỡ của các nước XHCN trong đấu tranh cách mạng, cần coi trọng nhân tố nào?",
    [
        "A. Đường lối đấu tranh theo cách mạng vô sản.",
        "B. Có sự lãnh đạo đúng đắn của Đảng Cộng sản.",
        "C. Tự lực cánh sinh, dựa vào sức mình là chính.",
        "D. Có đường lối đấu tranh độc lập, tự chủ."
    ],
    "B. Có sự lãnh đạo đúng đắn của Đảng Cộng sản."
);

let q85 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Nông dân giàu thì nước ta giàu, […] thịnh thì nước ta thịnh”.",
    [
        "A. Du lịch.",
        "B. Công nghiệp.",
        "C. Nông nghiệp.",
        "D. Thương nghiệp."
    ],
    "C. Nông nghiệp."
);
let q86 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, mục tiêu, lý tưởng của Đảng Cộng sản Việt Nam là:",
    [
        "A. Phục vụ lợi ích của giai cấp vô sản.",
        "B. Phụng sự tổ quốc, phục vụ nhân dân.",
        "C. Phục vụ lợi ích của giai cấp công nhân.",
        "D. Xây dựng đất nước giàu mạnh."
    ],
    "B. Phụng sự tổ quốc, phục vụ nhân dân."
);

let q87 = new Question(
    "Câu hỏi: Cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng của ai lãnh đạo?",
    [
        "A. Giai cấp công nhân.",
        "B. Giai cấp vô sản bần cùng.",
        "C. Giai cấp nông dân.",
        "D. Tầng lớp trí thức."
    ],
    "A. Giai cấp công nhân."
);

let q88 = new Question(
    "Câu hỏi: Tác phẩm “Bản án chế độ thực dân Pháp” của Nguyễn Ái Quốc được xuất bản lần đầu tiên vào năm nào?",
    [
        "A. Năm 1925.",
        "B. Năm 1924.",
        "C. Năm 1927.",
        "D. Năm 1930."
    ],
    "A. Năm 1925."
);

let q89 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp của 3 yếu tố, là xác định:",
    [
        "A. Nguồn gốc ra đời của Đảng.",
        "B. Nhiệm vụ lịch sử của Đảng.",
        "C. Tiêu chuẩn ra đời của Đảng.",
        "D. Bản chất ra đời của Đảng."
    ],
    "A. Nguồn gốc ra đời của Đảng."
);

let q90 = new Question(
    "Câu hỏi: “Trước hết phải có Đảng cách mạng để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi”. Câu được trích trong:",
    [
        "A. Tác phẩm “Đường cách mạng”.",
        "B. Tác phẩm “Con Rồng tre”.",
        "C. Tác phẩm “Bản án chế độ thực dân Pháp”.",
        "D. Tác phẩm “Sửa đổi lối làm việc”."
    ],
    "A. Tác phẩm “Đường cách mạng”."
);

let q91 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, nguyên tắc cơ bản nhất tổ chức và sinh hoạt Đảng là gì?",
    [
        "A. Tập trung dân chủ.",
        "B. Thiểu số phục tùng đa số.",
        "C. Tự phê bình và phê bình.",
        "D. Cấp dưới phục tùng cấp trên."
    ],
    "A. Tập trung dân chủ."
);

let q92 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, trong quan hệ với quần chúng nhân dân, Đảng cần làm gì?",
    [
        "A. Không theo đuôi quần chúng.",
        "B. Luôn luôn lắng nghe quần chúng.",
        "C. Thực hiện theo yêu cầu của nhân dân.",
        "D. Lắng nghe và thực hiện theo yêu cầu của quần chúng."
    ],
    "A. Không theo đuôi quần chúng."
);

let q93 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Nước ta là nước […], nghĩa là nhà nước do nhân dân […]”.",
    [
        "A. Dân chủ; Làm chủ.",
        "B. Vô sản; Quản lý.",
        "C. Dân chủ; Quản lý.",
        "D. Vì dân; Kiểm soát."
    ],
    "A. Dân chủ; Làm chủ."
);
let q94 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, yêu cầu cơ bản nhất để xây dựng nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ là gì?",
    [
        "A. Nhà nước phải quản lý đất nước bằng Hiến pháp và pháp luật.",
        "B. Nhà nước phải chịu sự lãnh đạo của Đảng Cộng sản Việt Nam.",
        "C. Nhà nước phải chịu sự kiểm tra, giám sát chặt chẽ của nhân dân.",
        "D. Đẩy mạnh quan hệ quốc tế, tuân thủ hệ thống pháp luật quốc tế."
    ],
    "A. Nhà nước phải quản lý đất nước bằng Hiến pháp và pháp luật."
);

let q95 = new Question(
    "Câu hỏi: Trong quan điểm toàn diện và hệ thống, Hồ Chí Minh xem xét cách mạng Việt Nam trong:",
    [
        "A. Quan hệ tổng thể với cách mạng thế giới.",
        "B. Quan hệ với cách mạng giải phóng dân tộc.",
        "C. Quan hệ với cách mạng giải phóng giai cấp.",
        "D. Quan hệ với cách mạng giải phóng dân tộc và giai cấp."
    ],
    "D. Quan hệ với cách mạng giải phóng dân tộc và giai cấp."
);

let q96 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Việc gì có lợi cho […], ta phải hết sức làm; việc gì có hại cho […], ta phải hết sức tránh”.",
    [
        "A. Dân.",
        "B. Nhà nước.",
        "C. Đảng.",
        "D. Công dân."
    ],
    "A. Dân."
);

let q97 = new Question(
    "Câu hỏi: Con người theo quan niệm của Hồ Chí Minh là:",
    [
        "A. Vốn quý nhất, nhân tố quyết định thành công của cách mạng.",
        "B. Vốn quý nhất, nhân tố quan trọng đến thành công của cách mạng.",
        "C. Vốn quý của cách mạng, là nguồn vốn quý giá của xã hội.",
        "D. Nguồn vốn vô giá của xã hội, là động lực của cách mạng."
    ],
    "A. Vốn quý nhất, nhân tố quyết định thành công của cách mạng."
);

let q98 = new Question(
    "Câu hỏi: Nhà nước của dân theo tư tưởng Hồ Chí Minh nghĩa là:",
    [
        "A. Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân.",
        "B. Chăm lo mọi mặt đời sống người lao động và các tầng lớp nhân dân.",
        "C. Mọi công việc của nhà nước để dân có quyền biểu quyết để quyết định.",
        "D. Đại biểu của Nhà nước do nhân dân trực tiếp hoặc gián tiếp bầu ra."
    ],
    "A. Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân."
);

let q99 = new Question(
    "Câu hỏi: Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
    [
        "A. Mục tiêu, nhiệm vụ hàng đầu của cách mạng, của dân tộc.",
        "B. Nhiệm vụ và trách nhiệm hàng đầu của cách mạng.",
        "C. Nhiệm vụ quan trọng nhất của cách mạng dân tộc.",
        "D. Mục tiêu của cách mạng, trách nhiệm của Đảng."
    ],
    "A. Mục tiêu, nhiệm vụ hàng đầu của cách mạng, của dân tộc."
);

let q100 = new Question(
    "Câu hỏi: Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
    [
        "A. Đoàn kết công – nông và các tầng lớp khác trong xã hội.",
        "B. Đoàn kết giai cấp công nhân – nông dân – lao động trí óc.",
        "C. Đoàn kết giai cấp công nhân – nông dân.",
        "D. Đoàn kết toàn bộ các tộc người trên một lãnh thổ."
    ],
    "A. Đoàn kết công – nông và các tầng lớp khác trong xã hội."
);
let q1 = new Question("Câu hỏi: Theo tư tưởng Hồ Chí Minh, nếu lý luận và thực tiễn không thống nhất với nhau cần phải điều chỉnh một yếu tố thì trước hết phải điều chỉnh yếu tố nào?", ["A. Điều chỉnh cả lý luận và thực tiễn.", "B. Điều chỉnh thực tiễn trước.", "C. Thực hành phải nhắm theo lý luận.", "D. Điều chỉnh lý luận trước."], "A. Điều chỉnh cả lý luận và thực tiễn.");
let q2 = new Question("Câu hỏi: Hồ Chí Minh lấy tên là Nguyễn ái Quốc khi đang ở đâu? Thời gian nào?", ["A. Ở Paris - Pháp, năm 1919.", "B. Ở Pháp, năm 1920.", "C. Ở Paris - Pháp, năm 1920.", "D. Ở Boston - Mỹ, năm 1917."], "A. Ở Paris - Pháp, năm 1919.");
let q3 = new Question("Câu hỏi: Quan niệm thiện, ác được hình thành từ đâu?", ["A. Từ những quan hệ kinh tế, xã hội, giai cấp con người.", "B. Từ giai cấp con người.", "C. Từ quan hệ kinh tế.", "D. Từ quan hệ kinh tế, xã hội."], "A. Từ những quan hệ kinh tế, xã hội, giai cấp con người.");
let q4 = new Question("Câu hỏi: Nguyễn Tất Thành tham dự Đại hội lần thứ 18 của Đảng Xã hội Pháp tại Tours (từ 25 đến 30/12/1920) với tư cách là:", ["A. Đại biểu duy nhất của các nước thuộc địa Đông Dương.", "B. Đại biểu duy nhất của các nước thuộc địa châu Á.", "C. Đại biểu duy nhất cho Đảng xã hội Pháp tại Paris.", "D. Đại biểu đầu tiên là người Việt Nam tham dự một Đại hội."], "A. Đại biểu duy nhất của các nước thuộc địa Đông Dương.");
let q5 = new Question("Câu hỏi: Hồ Chí Minh tiếp thu tư tưởng văn hoá phương Đông chủ yếu từ đâu?", ["A. Nho giáo và Phật giáo.", "B. Nho giáo và Thiên Chúa giáo.", "C. Phật giáo và Thiên Chúa giáo.", "D. Chủ nghĩa Mác – Lênin."], "A. Nho giáo và Phật giáo.");

let q6 = new Question("Câu hỏi: Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đại đoàn kết toàn dân tộc chỉ có sức mạnh khi được tập hợp, tổ chức thành:", ["A. Mặt trận dân tộc thống nhất.", "B. Mặt trận tổ quốc Việt Nam.", "C. Mặt trận dân chủ Đông Dương.", "D. Mặt trận nhân dân thống nhất."], "A. Mặt trận dân tộc thống nhất.");

let q7 = new Question("Câu hỏi: Trong tư tưởng Lão giáo khuyên con người cần phải có đầy đủ tri thức. Người cần có đầy đủ tri thức là ai?", ["A. Toàn bộ người dân.", "B. Người thuộc tầng lớp cai trị.", "C. Người thuộc tầng lớp trí thức giả.", "D. Người thuộc tầng lớp thượng lưu."], "A. Toàn bộ người dân.");

let q8 = new Question("Câu hỏi: Nguyễn Ái Quốc đã thành lập Hội Việt Nam cách mạng thanh niên tại đâu?", ["A. Quảng Châu (Trung Quốc).", "B. Hương Cảng (Trung Quốc).", "C. Thượng Hải (Trung Quốc).", "D. Cao Bằng (Việt Nam)."], "A. Quảng Châu (Trung Quốc).");

let q9 = new Question("Câu hỏi: Hồ Chí Minh sáng lập “Hội Việt Nam cách mạng thanh niên” vào thời gian nào?", ["A. Tháng 06/1925.", "B. Tháng 05/1926.", "C. Tháng 06/1927.", "D. Tháng 08/1929."], "A. Tháng 06/1925.");

let q10 = new Question("Câu hỏi: Theo Hồ Chí Minh độc lập, tự do là:", ["A. Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.", "B. Quyền thiêng liêng của tất cả các dân tộc trên thế giới.", "C. Quyền bất khả xâm phạm của tất cả các dân tộc trên thế giới.", "D. Quyền tự quyết của tất cả các dân tộc trên thế giới."], "A. Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.");

let q11 = new Question("Câu hỏi: Cuốn Đường cách mệnh được xuất bản đầu tiên ở đâu? Thời gian nào?", ["A. Quảng Châu – Trung Quốc, năm 1927.", "B. Hương Cảng – Trung Quốc năm 1927.", "C. Quảng Châu – Trung Quốc, năm 1925.", "D. Bắc pó – Việt Nam, năm 1927."], "A. Quảng Châu – Trung Quốc, năm 1927.");

let q12 = new Question("Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Toàn thể dân tộc Việt Nam quyết đem […] để giữ vững quyền tự do, độc lập ấy”.", ["A. Tất cả tinh thần và lực lượng, tính mạng và của cải.", "B. Tất cả tinh thần và lực lượng đang có và sẽ có.", "C. Toàn bộ sức lực và của cải, tinh thần và lực lượng.", "D. Toàn bộ sinh mệnh và quyết tâm cao nhất."], "A. Tất cả tinh thần và lực lượng, tính mạng và của cải.");
let q13 = new Question("Câu hỏi: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do”. Câu này được trích từ:", ["A. Tuyên ngôn độc lập nước Mỹ 1776.", "B. Tuyên ngôn dân quyền và nhân quyền.", "C. Tuyên ngôn Đảng Cộng sản.", "D. Tuyên ngôn Đảng Lao động."], "A. Tuyên ngôn độc lập nước Mỹ 1776.");

let q14 = new Question("Câu hỏi: Yếu tố nào là một động lực lớn trong cuộc đấu tranh giải phóng dân tộc ở các nước thuộc địa?", ["A. Chủ nghĩa dân tộc.", "B. Chủ nghĩa yêu nước.", "C. Chủ nghĩa xã hội.", "D. Chủ nghĩa cộng sản."], "A. Chủ nghĩa dân tộc.");

let q15 = new Question("Câu hỏi: Hồ Chí Minh nhận nhiệm vụ quốc tế đầu tiên của Quốc tế III là ở đâu? Nhiệm vụ gì?", ["A. Quảng Châu – Trung Quốc, giúp thành lập các tổ chức cộng sản.", "B. Quảng Đông – Trung Quốc, giúp thành lập các tổ chức cộng sản.", "C. Quảng Tây – Trung Quốc, giúp thành lập các tổ chức cộng sản.", "D. Hương Cảng – Trung Quốc, giúp thành lập các tổ chức cộng sản."], "A. Quảng Châu – Trung Quốc, giúp thành lập các tổ chức cộng sản.");

let q16 = new Question("Câu hỏi: Nhà Nguyễn ký hiệp ước với Pháp biến Việt Nam chính thức thành thuộc địa vào năm bao nhiêu?", ["A. Hiệp ước Patonot năm 1884.", "B. Hiệp ước Patonot năm 1883.", "C. Hiệp ước thuộc địa năm 1884.", "D. Hiệp ước Unclos năm 1992."], "A. Hiệp ước Patonot năm 1884.");

let q17 = new Question("Câu hỏi: Theo Hồ Chí Minh, chủ nghĩa cộng sản ra đời dễ dàng hơn ở đâu?", ["A. Châu Á, phương Đông.", "B. Châu Á, phương Tây Nam.", "C. Châu Âu, Đông Âu.", "D. Châu Âu, Tây Âu."], "A. Châu Á, phương Đông.");

let q18 = new Question("Câu hỏi: Người khởi xướng và lãnh đạo phong trào Duy Tân (1906 - 1908) là:", ["A. Phan Chu Trinh.", "B. Lương Văn Can.", "C. Nguyễn Thái Học.", "D. Phan Bội Châu."], "A. Phan Chu Trinh.");

let q19 = new Question("Câu hỏi: Quốc tế Cộng sản trên thế giới ra đời thời gian nào?", ["A. 02/03/1919.", "B. 03/02/1919.", "C. 16/07/1920.", "D. 03/02/1930."], "A. 02/03/1919.");

let q20 = new Question("Câu hỏi: Đánh giá về cách mạng Tháng Mười Nga 1917, Hồ Chí Minh xác định:", ["A. Cách mạng triệt để.", "B. Cách mạng đến nơi.", "C. Cách mạng thành công.", "D. Cách mạng thành công một nữa."], "A. Cách mạng triệt để.");

let q21 = new Question("Câu hỏi: Để mô tả mối quan hệ giữa cách mạng giải phóng dân và cách mạng vô sản, Hồ Chí Minh sử dụng hình tượng:", ["A. Hai cánh của một con chim.", "B. Con đĩa có hai vòi.", "C. Hai con chim đại bàng.", "D. Con bạch tuộc."], "A. Hai cánh của một con chim.");

let q22 = new Question("Câu hỏi: Theo Hồ Chí Minh, cách mạng bạo lực là đấu tranh:", ["A. Kết hợp chính trị quần chúng với vũ trang nhân dân.", "B. Kết hợp chính trị quần chúng với đấu tranh ngoại giao.", "C. Kết hợp vũ trang nhân dân với mặt trận ngoại giao.", "D. Kết hợp đấu tranh quân sự với đấu tranh ngoại giao."], "A. Kết hợp chính trị quần chúng với vũ trang nhân dân");
let q23 = new Question("Câu hỏi: Theo Hồ Chí Minh, kẻ thù hung ác nhất của chủ nghĩa xã hội là gì?", ["A. Chủ nghĩa cá nhân.", "B. Tham ô, lãng phí.", "C. Các thế lực phản động.", "D. Lạm dụng chức quyền."], "A. Chủ nghĩa cá nhân.");

let q24 = new Question("Câu hỏi: Đảng Cộng sản Việt Nam trở thành Đảng cầm quyền ở Việt Nam từ thời gian nào?", ["A. Ngày 03/02/1930.", "B. Ngày 24/02/1930.", "C. Ngày 06/01/1946.", "D. Ngày 30/04/1975."], "A. Ngày 03/02/1930.");

let q25 = new Question("Câu hỏi: Chọn đáp án KHÔNG đúng. Nguyên tắc xây dựng Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:", ["A. Thiểu số phục tùng đa số.", "B. Đoàn kết, thống nhất trong Đảng.", "C. Tự phê bình và phê bình.", "D. Kỷ luật nghiêm minh, tự giác."], "A. Thiểu số phục tùng đa số.");

let q26 = new Question("Câu hỏi: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác – Lênin “làm cốt”, nghĩa là:", ["A. Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng, kim chỉ nam cho hành động.", "B. Lấy chủ nghĩa Mác – Lênin làm chủ trương, đường lối, chính sách cho hành động.", "C. Dựa vào chủ nghĩa Mác – Lênin để xây dựng học thuyết, quan điểm của Đảng.", "D. Căn cứ hoàn toàn vào chủ nghĩa Mác – Lênin mới lãnh đạo cách mạng thắng lợi."], "A. Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng, kim chỉ nam cho hành động.");

let q27 = new Question("Câu hỏi: Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệp đoàn kết của:", ["A. Toàn dân, trên cơ sở liên minh công – nông.", "B. Giai cấp vô sản, nông dân và tầng lớp trí thức.", "C. Công nhân, nông dân và tầng lớp trí thức.", "D. Nhân dân các nước thuộc địa trên thế giới."], "A. Toàn dân, trên cơ sở liên minh công – nông.");

let q28 = new Question("Câu hỏi: Tư tưởng Hồ Chí Minh về Đảng Cộng sản được hình thành trên cơ sở nào?", ["A. Lý luận của chủ nghĩa Mác – Lênin.", "B. Thực tiễn cách mạng đấu tranh trong nước.", "C. Thực tiễn cách mạng đấu tranh thế giới.", "D. Lý luận khoa học và thực tiễn cách mạng."], "A. Lý luận của chủ nghĩa Mác – Lênin.");

let q29 = new Question("Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Mục đích phê bình cốt để […], giúp nhau tiến bộ”.", ["A. Giúp nhau sửa chữa.", "B. Sửa chữa sai lầm.", "C. Chỉ ra khuyết điểm.", "D. Giúp nhau cải tạo."], "A. Giúp nhau sửa chữa.");

let q30 = new Question("Câu hỏi: Theo Hồ Chí Minh, chế độ chính trị mà chúng ta xây dựng là chế độ do:", ["A. Giai cấp công nhân và nhân dân lao động làm chủ.", "B. Giai cấp công nhân và giai cấp nông dân làm chủ.", "C. Đảng Cộng sản của giai cấp công nhân làm chủ.", "D. Giai cấp nông dân và các tầng lớp nhân dân làm chủ."], "A. Giai cấp công nhân và nhân dân lao động làm chủ.");

let q31 = new Question("Câu hỏi: Trong môn học tư tưởng Hồ Chí Minh nêu bao nhiêu phương pháp nghiên cứu?", ["A. Ba phương pháp.", "B. Bốn phương pháp.", "C. Năm phương pháp.", "D. Sáu phương pháp."], "A. Ba phương pháp.");
let q32 = new Question("Câu hỏi: Xây dựng nhà nước pháp quyền, của dân, do dân và vì dân ở nước ta hiện nay cần phải:", ["A. Xây dựng hệ thống luật pháp hoàn chỉnh và phân quyền rõ ràng.", "B. Tăng cường sự lãnh đạo của Đảng Cộng sản Việt Nam.", "C. Dân chủ hóa tổ chức và hoạt động của bộ máy Nhà nước.", "D. Đưa luật pháp triển khai đầy đủ vào đời sống nhân dân."], "A. Xây dựng hệ thống luật pháp hoàn chỉnh và phân quyền rõ ràng.");

let q33 = new Question("Câu hỏi: Cơ chế vận hành của hệ thống chính trị nước ta là:", ["A. Đảng lãnh đạo, nhà nước quản lý, nhân dân làm chủ.", "B. Đảng và nhà nước lãnh đạo, quản lý, nhân dân làm chủ.", "C. Nhà nước lãnh đạo, Đảng quản lý, nhân dân làm chủ.", "D. Nhà nước làm chủ, Đảng lãnh đạo, nhân dân quản lý."], "A. Đảng lãnh đạo, nhà nước quản lý, nhân dân làm chủ.");

let q34 = new Question("Câu hỏi: Theo Hồ Chí Minh, lực lượng làm nền tảng cho khối đại đoàn kết dân tộc là gì?", ["A. Công nhân, nông dân, lao động trí óc.", "B. Công nhân, nông dân, trí thức cao.", "C. Học trò, nhà buôn, tư sản nhân dân.", "D. Giai cấp công nhân, giai cấp vô sản."], "A. Công nhân, nông dân, lao động trí óc.");

let q35 = new Question("Câu hỏi: Một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ theo Hồ Chí Minh phải là:", ["A. Một nhà nước được công nhận bằng hiến pháp và pháp luật của dân.", "B. Một nhà nước không có tiêu cực, không có đặc quyền, đặc lợi, cá nhân.", "C. Một nhà nước thống nhất, có chủ quyền quốc gia trên vùng, lãnh thổ.", "D. Một nhà nước mà quyền lực thuộc về nhân dân, do dân và vì nhân dân."], "A. Một nhà nước được công nhận bằng hiến pháp và pháp luật của dân.");

let q36 = new Question("Câu hỏi: Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là:", ["A. Mục tiêu lâu dài của cách mạng.", "B. Nhiệm vụ trường tồn của cách mạng.", "C. Đích đến cuối cùng của cách mạng.", "D. Thực tiễn đấu tranh của cách mạng."], "A. Mục tiêu lâu dài của cách mạng.");

let q37 = new Question("Câu hỏi: Theo Hồ Chí Minh, đối với sự nghiệp cách mạng, đại đoàn kết là:", ["A. Yêu cầu khách quan.", "B. Yêu cầu chủ quan.", "C. Yêu cầu của nông dân.", "D. Yêu cầu của công nhân."], "A. Yêu cầu khách quan.");

let q38 = new Question("Câu hỏi: Trong khối đại đoàn kết dân tộc, vì sao phải đặc biệt chú trọng yếu tố “hạt nhân”?", ["A. Vì đó là cơ sở phát huy cho sự đoàn kết.", "B. Vì đó là điều kiện cho thành công của đoàn kết.", "C. Vì đó là mong muốn của đại đa số người dân.", "D. Vì đó là điều kiện cho sự đoàn kết ngoài xã hội."], "A. Vì đó là cơ sở phát huy cho sự đoàn kết.");

let q39 = new Question("Câu hỏi: Chọn đáp án KHÔNG đúng. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc:", ["A. Phải có lòng yêu thương con người, sống có hoài bão.", "B. Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết.", "C. Phải có lòng khoan dung, độ lượng với con người.", "D. Phải có niềm tin vào nhân dân."], "A. Phải có lòng yêu thương con người, sống có hoài bão.");

let q40 = new Question(
    "Câu hỏi: Từ cuối năm 1911 đến 1917, khi quay lại tàu làm việc Hồ Chí Minh đã đi qua những đâu?",
    [
        "A. Châu Á; Châu Phi; Châu Âu; Châu Mỹ.",
        "B. Châu Á; Châu Phi; Châu Mỹ.",
        "C. Châu Phi; Nam Mỹ; Hoa Kỳ.",
        "D. Châu Á; Châu Phi; Châu Âu."
    ],
    "A. Châu Á; Châu Phi; Châu Âu; Châu Mỹ."
);

let q41 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là nhân tố quyết định hàng đầu thắng lợi cách mạng Việt Nam, là xác định:",
    [
        "A. Vai trò lãnh đạo của Đảng.",
        "B. Vị thế cầm quyền của Đảng.",
        "C. Bản chất của Đảng cầm quyền.",
        "D. Nhiệm vụ lịch sử của Đảng."
    ],
    "A. Vai trò lãnh đạo của Đảng."
);

let q42 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Nguyên tắc xây dựng và hoạt động của Mặt trận Dân tộc thống nhất là:",
    [
        "A. Lấy lợi ích tối cao của giai cấp công nhân, giai cấp vô sản làm mục tiêu phấn đấu.",
        "B. Xây dựng trên nền tảng liên minh công – nông – trí, dưới sự lãnh đạo của Đảng.",
        "C. Xuất phát từ mục tiêu vì nước, vì dân; hoạt động theo nguyên tắc hiệp thương dân chủ.",
        "D. Đoàn kết lâu dài, chặt chẽ, đoàn kết thực sự, chân thành, thân ái giúp đỡ nhau tiến bộ."
    ],
    "A. Lấy lợi ích tối cao của giai cấp công nhân, giai cấp vô sản làm mục tiêu phấn đấu."
);

let q43 = new Question(
    "Câu hỏi: Dưới góc nhìn và phân tích của các nhà nghiên cứu, Hồ Chí Minh có chiều cao và cân nặng bao nhiêu?",
    [
        "A. Cao 1,5 m; Nặng 45 kg.",
        "B. Cao 1,52 m; Nặng 45,5 kg.",
        "C. Cao 1,55 m; Nặng 46 kg.",
        "D. Cao 1,5 m; Nặng 55 kg."
    ],
    "A. Cao 1,5 m; Nặng 45 kg."
);

let q44 = new Question(
    "Câu hỏi: Điền vào chỗ trống đúng theo Hồ Chí Minh, “Việt Nam muốn làm bạn với […], không gây thù oán với một ai”:",
    [
        "A. Mọi nước dân chủ.",
        "B. Tất cả các nước dân chủ.",
        "C. Các nước xã hội chủ nghĩa.",
        "D. Các nước phát triển cao."
    ],
    "A. Mọi nước dân chủ."
);

let q45 = new Question(
    "Câu hỏi: Chọn đáp án đúng nhất. Sức mạnh thời đại trong đoàn kết quốc tế là gì?",
    [
        "A. Sức mạnh của phong trào cách mạng thế giới.",
        "B. Sức mạnh của phong trào vì hòa bình, độc lập dân tộc.",
        "C. Sức mạnh của cách mạng khoa học công nghệ 4.0.",
        "D. Sức mạnh của cách mạng cải cách nền dân chủ thế giới."
    ],
    "A. Sức mạnh của phong trào cách mạng thế giới."
);

let q46 = new Question(
    "Câu hỏi: Quan điểm của Hồ Chí Minh về văn hóa theo nghĩa hẹp bắt đầu tính từ thời gian nào?",
    [
        "A. Sau Cách mạng Tháng Tám năm 1945.",
        "B. Sau Cách mạng thành công năm 1954.",
        "C. Sau khi Nhật vào Đông Dương, 1943.",
        "D. Sau Cách mạng thành công năm 1975."
    ],
    "A. Sau Cách mạng Tháng Tám năm 1945."
);

let q47 = new Question(
    "Câu hỏi: Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, nền văn hóa mà chúng ta xây dựng phải có:",
    [
        "A. Tính tiên tiến.",
        "B. Tính dân tộc.",
        "C. Tính khoa học.",
        "D. Tính đại chúng."
    ],
    "A. Tính tiên tiến."
);

let q48 = new Question(
    "Câu hỏi: “Toàn Đảng hãy ra sức học tập đường lối chính trị, tác phong và đạo đức cách mạng của Hồ Chủ tịch…” được viết trong văn kiện tại:",
    [
        "A. Đại hội đại biểu toàn quốc lần thứ II của Đảng.",
        "B. Đại hội đại biểu toàn quốc lần thứ IV của Đảng.",
        "C. Đại hội đại biểu toàn quốc lần thứ V của Đảng.",
        "D. Đại hội đại biểu toàn quốc lần thứ XI của Đảng."
    ],
    "A. Đại hội đại biểu toàn quốc lần thứ II của Đảng."
);
let q49 = new Question(
    "Câu hỏi: Theo Hồ Chí Minh, mỗi bước phát triển của kinh tế, chính trị, xã hội đều có:",
    [
        "A. Sự soi đường của văn hóa.",
        "B. Sự soi sáng của văn hóa.",
        "C. Sự đóng góp của văn hóa.",
        "D. Sự khai sáng của văn hóa."
    ],
    "A. Sự soi đường của văn hóa."
);

let q50 = new Question(
    "Câu hỏi: Theo tư tưởng Hồ Chí Minh, tính đại chúng của nền văn hóa được thể hiện ở chỗ:",
    [
        "A. Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên.",
        "B. Đó là một nền văn hóa đa dạng cùng với sự đa dạng của các dân tộc anh em.",
        "C. Nền văn hóa ấy vượt ra khỏi biên giới quốc gia, vươn tầm khu vực và thế giới.",
        "D. Đó là một nền văn hóa rộng lớn, phổ cập đến tất cả mọi người trong xã hội."
    ],
    "A. Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên."
);

let questions = [
    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
    q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39,
    q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60,
    q61, q62, q63, q64, q65, q66, q67, q68, q69, q70, q71, q72, q73, q74, q75, q76, q77, q78, q79, q80,
    q81, q82, q83, q84, q85, q86, q87, q88, q89, q90, q91, q92, q93, q94, q95, q96, q97, q98, q99, q100,
    q101, q102, q103, q104, q105, q106, q107, q108, q109, q110, q111, q112, q113, q114, q115, q116, q117, q118, q119, q120,
    q121, q122, q123, q124, q125, q126, q127, q128, q129, q130, q131, q132, q133, q134, q135, q136, q137, q138, q139, q140,
    q141, q142, q143, q144, q145, q146, q147, q148, q149, q150, q151, q152, q153, q154, q155, q156, q157, q158, q159, q160,
    q161, q162, q163, q164, q165, q166, q167, q168, q169, q170, q171, q172, q173, q174, q175, q176, q177, q178, q179, q180,
    q181, q182, q183, q184, q185, q186, q187, q188, q189, q190, q191, q192, q193, q194, q195, q196, q197, q198, q199, q200,
    q201, q202, q203, q204, q205, q206, q207, q208, q209, q210, q211, q212, q213, q214, q215, q216, q217, q218, q219, q220,
    q221, q222, q223, q224, q225, q226, q227, q228, q229, q230
];
const getQuestion = document.getElementById("questions");
showQuestions(questions[0]);

let countQuestions = 1;  // Biến này sẽ theo dõi số câu hỏi đã trả lời

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi các phần tử
    }
}

function showQuestions(question) {
    let result = "";
    result += `<label for="answer" style="font-weight: bold">${question.content}</label><br><br>`;

    // Xáo trộn các đáp án
    shuffleArray(question.answer);

    for (let i = 0; i < 4; i++) {
        result += `<button type="button" class="answer" onclick="checkAnswer('${question.answer[i]}', this, ${i})">${question.answer[i]}</button><br>`;
    }
    result += `<div id="feedback" style="font-weight: bold;"></div>`;  // Thêm phần hiển thị phản hồi
    result += '<button type="button" id="nextButton" style="display:none;" onclick="nextQuestion()">Tiếp tục</button>';  // Nút "Tiếp tục"
    getQuestion.innerHTML = result;
}

let index = 0;
let count = 0;
let isAnswerSelected = false;  // Biến để kiểm tra xem đã chọn đáp án hay chưa

function checkAnswer(answer, button, selectedIndex) {
    if (isAnswerSelected) return; // Nếu đã chọn đáp án thì không cho chọn lại

    isAnswerSelected = true;
    // Cập nhật số câu đã trả lời lên màn hình
    document.getElementById('answeredCount').innerHTML = `Câu đã trả lời: ${countQuestions}`;

    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');

    const correctAnswerIndex = questions[index].answer.indexOf(questions[index].correctAnswer);

    // Kiểm tra đáp án và thay đổi màu sắc của các nút
    if (answer === questions[index].correctAnswer) {
        musicCorrect.play();
        feedback.innerHTML = "Bạn trả lời đúng!";
        feedback.style.color = "green";
        count++;
        button.style.backgroundColor = "green";  // Đáp án đúng màu xanh lá cây
    } else {
        musicFail.play();
        feedback.innerHTML = "Bạn trả lời sai!";
        feedback.style.color = "red";
        button.style.backgroundColor = "red";  // Đáp án sai màu đỏ
    }

    // Tô màu xanh lá cây cho đáp án đúng
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((btn, idx) => {
        if (idx === correctAnswerIndex) {
            btn.style.backgroundColor = "green";  // Tô màu xanh lá cây cho đáp án đúng
        } else if (btn !== button) {
            btn.style.backgroundColor = "gray";  // Các đáp án còn lại màu xám
            btn.disabled = true;  // Vô hiệu hóa các nút khác
        }
    });

    nextButton.style.display = "inline-block";  // Hiển thị nút "Tiếp tục"
}

function nextQuestion() {
    isAnswerSelected = false;  // Reset để có thể chọn đáp án tiếp theo

    // Xóa feedback và nút "Tiếp tục" cho câu hỏi tiếp theo
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('nextButton').style.display = "none";

    countQuestions++;  // Tăng số câu hỏi đã trả lời

    questions.splice(index, 1);  // Xóa câu hỏi đã trả lời
    index = randomQuestion();

    if (index < questions.length) {
        showQuestions(questions[index]);
    } else {
        renderToManHinhKet();
    }
}

function endGame() {
    // Chức năng khi nhấn nút "Kết thúc trò chơi"
    Swal.fire({
        title: "Bạn chắc chắn muốn kết thúc?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Có, kết thúc',
        cancelButtonText: 'Không, tiếp tục chơi'
    }).then((result) => {
        if (result.isConfirmed) {
            renderToManHinhKet();  // Kết thúc trò chơi
        }
    });
}

function renderToManHinhKet() {
    fireworkSound.play();
    window.location.href = `Man_Hinh_Ket.html?correct=${count}`;
}

function randomQuestion() {
    return Math.floor(Math.random() * questions.length);
}

let musicBackground;
let musicCorrect;
let musicFail;
let fireworkSound;

function initMusic() {
    musicBackground = new Audio("../sound/background.mp3");
    musicCorrect = new Audio("../sound/correct.mp3");
    musicFail = new Audio("../sound/fail.mp3");
    fireworkSound = new Audio("../sound/firework_sound.mp3");
    musicBackground.loop = true;
    musicBackground.volume = 0.5;
}

window.onload = function () {
    initMusic();
    musicBackground.play();
}

