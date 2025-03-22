// js/modules/forms.js
const Forms = {
  init() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      // 表单字段焦点效果
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        // 聚焦时添加高亮效果
        input.addEventListener('focus', function() {
          this.classList.add('ring-2', 'ring-primary/30');
        });
        
        input.addEventListener('blur', function() {
          this.classList.remove('ring-2', 'ring-primary/30');
        });
        
        // 实时验证
        input.addEventListener('input', function() {
          this.classList.remove('border-red-500');
          
          // 移除错误消息
          const errorMessage = this.nextElementSibling;
          if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
          }
          
          // 如果是必填字段且有值，显示成功状态
          if (this.hasAttribute('required') && this.value.trim()) {
            this.classList.add('border-green-500');
          } else {
            this.classList.remove('border-green-500');
          }
        });
      });
      
      // 表单提交增强
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
            
            // 添加错误消息
            let errorMessage = field.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains('error-message')) {
              errorMessage = document.createElement('p');
              errorMessage.classList.add('error-message', 'text-red-500', 'text-xs', 'mt-1');
              errorMessage.textContent = 'This field is required';
              field.parentNode.insertBefore(errorMessage, field.nextSibling);
            }
          }
        });
        // 添加提交按钮加载状态
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton && isValid) {
          submitButton.disabled = true;
          submitButton.classList.add('opacity-75');
          
          // 添加加载指示器
          const originalText = submitButton.innerHTML;
          submitButton.innerHTML = `
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          `;
          
          // 模拟提交延迟
          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-75');
            
            // 显示成功消息
            const successMessage = document.createElement('div');
            successMessage.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'mt-4', 'success-message');
            successMessage.innerHTML = '<p>Form submitted successfully!</p>';
            form.appendChild(successMessage);
            
            // 3秒后移除成功消息
            setTimeout(() => {
              successMessage.remove();
            }, 3000);
            
            form.reset();
          }, 1500);
        }
      });
    });
  }
};
