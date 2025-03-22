const MotivationGenerator = {
  init() {
    // 选项切换优化
    const randomBtn = document.getElementById('random-btn');
    const customBtn = document.getElementById('custom-btn');
    const customQuoteInput = document.getElementById('custom-quote-input');
    
    if (randomBtn && customBtn && customQuoteInput) {
      randomBtn.addEventListener('click', function() {
        randomBtn.classList.add('bg-primary', 'text-white');
        randomBtn.classList.remove('border', 'border-primary', 'text-primary');
        
        customBtn.classList.remove('bg-primary', 'text-white');
        customBtn.classList.add('border', 'border-primary', 'text-primary');
        
        // 平滑隐藏自定义输入
        customQuoteInput.classList.add('opacity-0');
        setTimeout(() => {
          customQuoteInput.classList.add('hidden');
        }, 300);
        
        // 更新预览
        updatePreview();
      });
      
      customBtn.addEventListener('click', function() {
        customBtn.classList.add('bg-primary', 'text-white');
        customBtn.classList.remove('border', 'border-primary', 'text-primary');
        
        randomBtn.classList.remove('bg-primary', 'text-white');
        randomBtn.classList.add('border', 'border-primary', 'text-primary');
        
        // 平滑显示自定义输入
        customQuoteInput.classList.remove('hidden');
        setTimeout(() => {
          customQuoteInput.classList.remove('opacity-0');
        }, 10);
        
        // 更新预览
        updatePreview();
      });
    }
    
    // 背景选择优化
    const bgOptions = document.querySelectorAll('.bg-option');
    if (bgOptions.length > 0) {
      bgOptions.forEach(option => {
        option.addEventListener('click', function() {
          // 移除所有选中状态
          bgOptions.forEach(opt => opt.classList.remove('border-primary', 'scale-105'));
          
          // 添加当前选中状态
          this.classList.add('border-primary', 'scale-105');
          
          // 更新预览
          updatePreview();
        });
      });
    }
    
    // 样式选择优化
    const styleOptions = document.querySelectorAll('.style-option');
    if (styleOptions.length > 0) {
      styleOptions.forEach(option => {
        option.addEventListener('click', function() {
          // 移除所有选中状态
          styleOptions.forEach(opt => {
            opt.querySelector('div').classList.remove('bg-primary/10');
            opt.querySelector('div').classList.add('bg-gray-100');
          });
          
          // 添加当前选中状态
          this.querySelector('div').classList.remove('bg-gray-100');
          this.querySelector('div').classList.add('bg-primary/10');
          
          // 更新预览
          updatePreview();
        });
      });
    }
  }
};

// 更新预览
function updatePreview() {
  const previewContainer = document.querySelector('.preview-container');
  if (previewContainer) {
    // 更新预览内容
  }
}