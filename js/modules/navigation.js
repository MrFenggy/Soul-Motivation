const Navigation = {
  init() {
    // 设置当前页面的导航高亮
    const currentPage = document.body.getAttribute('data-page');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('text-primary');
        if (link.querySelector('span')) {
          link.querySelector('span').classList.add('w-full');
        }
      }
      
      // 鼠标悬停效果
      link.addEventListener('mouseenter', function() {
        if (this.getAttribute('data-page') !== currentPage) {
          if (this.querySelector('span')) {
            this.querySelector('span').classList.add('w-full');
          }
        }
      });
      
      link.addEventListener('mouseleave', function() {
        if (this.getAttribute('data-page') !== currentPage) {
          if (this.querySelector('span')) {
            this.querySelector('span').classList.remove('w-full');
          }
        }
      });
    });
    
    // 移动菜单优化
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        // 添加过渡动画
        if (mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.remove('hidden');
          setTimeout(() => {
            mobileMenu.classList.add('opacity-100');
            mobileMenu.classList.remove('opacity-0');
          }, 10);
        } else {
          mobileMenu.classList.add('opacity-0');
          mobileMenu.classList.remove('opacity-100');
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
          }, 300);
        }
      });
    }
  }
};
