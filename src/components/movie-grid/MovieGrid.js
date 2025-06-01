import React from 'react';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';

const CapSection = ({ description, subpoints }) => {
  return (
    <div className='cap-section'>
      <p>{description}</p>
      <ul>
        {subpoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const MovieGrid = ({ category, learncap, growcap, livecap }) => {
  const renderSection = () => {
    switch (category) {
      case 'learncap':
        const sampleLessons = [
          { title: 'Bài học số 1' },
          { title: 'Bài học số 2' },
          { title: 'Bài học số 3' },
          { title: 'Bài học số 4' },
          { title: 'Bài học số 5' },
          { title: 'Bài học số 6' },
        ];

        return (
          <>
            <CapSection
              description='Học đi đôi với trải nghiệm giúp mỗi cá nhân phát triển toàn diện.'
              subpoints={[
                learncap || 'Kiến thức chuyên môn kết hợp hoạt động thực tiễn.',
                'Khuyến khích học từ sai lầm và phản hồi.',
              ]}
            />
            <div className="lesson-list">
              {sampleLessons.map((lesson, index) => (
                <MovieCard key={index} item={lesson} />
              ))}
            </div>
          </>
        );
      case 'growcap':
        return (
          <>
            <CapSection
              description='Hệ thống điểm GrowCap (62 → 0) hướng đến việc gắn “golf spirit” vào sự nghiệp.'
              subpoints={[
                growcap || 'Từng bước chinh phục mục tiêu nghề nghiệp.',
                'Phát triển thông qua cạnh tranh lành mạnh và tự cải thiện.',
              ]}
            />

            <div className="user-summary">
              <div className="user-summary__avatar">
                <i className="bx bx-user"></i>
              </div>
              <div className="user-summary__info">
                <p><strong>Họ và tên:</strong> Nguyễn Văn A</p>
                <p><strong>Điểm GrowCap hiện tại:</strong> 28</p>
                <p><strong>Vị trí trên bảng xếp hạng:</strong> #12</p>
              </div>
            </div>

            <div className="achievement-list">
              <h4>Thành tích đã đạt được</h4>
              <ul>
                <li>
                  <strong>Top 10 quý I/2025</strong> – Duy trì điểm GrowCap ổn định trong 3 tháng liên tiếp.
                </li>
                <li>
                  <strong>Người học chủ động</strong> – Hoàn thành 100% nội dung đào tạo nội bộ.
                </li>
                <li>
                  <strong>Truyền cảm hứng</strong> – Được đồng nghiệp đánh giá cao trong khảo sát peer review.
                </li>
              </ul>
            </div>
          </>
        );
      default:
        const blogPosts = [
          {
            title: 'Lan tỏa năng lượng tích cực nơi công sở',
            content: 'Chị Hoa – phòng kế toán đã chủ động giúp đồng nghiệp mới làm quen quy trình chỉ trong 1 ngày, truyền động lực bằng sự kiên nhẫn và tử tế.',
            date: 'Tháng 5, 2025',
          },
          {
            title: 'Hành động nhỏ – Ý nghĩa lớn',
            content: 'Anh Minh bảo trì chủ động sửa máy cho bộ phận khác mà không chờ yêu cầu. Một hành động nhỏ, tạo ra tinh thần hỗ trợ lớn trong toàn nhóm.',
            date: 'Tháng 4, 2025',
          },
          {
            title: 'Chia sẻ sách hay mỗi thứ Hai đầu tuần',
            content: 'Team Sale duy trì văn hoá đọc và chia sẻ cảm nhận sách mỗi tuần. Việc này giúp gắn kết và tạo cảm hứng làm việc rõ rệt.',
            date: 'Tháng 3, 2025',
          },
        ];

        return (
          <div className="livecap-blogs">
            {blogPosts.map((post, index) => (
              <div className="livecap-blogs__item" key={index}>
                <h4>{post.title}</h4>
                <p className="date">{post.date}</p>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return <div className='section mb-3'>{renderSection()}</div>;
};

export default MovieGrid;
