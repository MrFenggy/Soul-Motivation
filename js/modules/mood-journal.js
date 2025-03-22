const MoodJournal = {
  init() {
    // 日历日期选择优化
    const calendarDays = document.querySelectorAll('.grid-cols-7 > div:not(:nth-child(-n+7))');
    
    calendarDays.forEach(day => {
      if (!day.classList.contains('text-gray-300')) { // 跳过其他月份的日期
        day.classList.add('cursor-pointer', 'hover:bg-primary/10', 'rounded-full', 'transition-all', 'duration-200');
        
        day.addEventListener('click', function() {
          // 移除所有选中状态
          calendarDays.forEach(d => d.classList.remove('bg-primary/20', 'font-bold', 'scale-110'));
          
          // 添加当前选中状态和动画
          this.classList.add('bg-primary/20', 'font-bold', 'scale-110');
          setTimeout(() => {
            this.classList.remove('scale-110');
          }, 300);
        });
      }
    });
    
    // 心情选择增强
    const moodSelect = document.querySelector('select');
    if (moodSelect) {
      moodSelect.addEventListener('change', function() {
        // 根据心情更改边框颜色
        const moodColors = {
          'happy': 'border-green-400',
          'calm': 'border-blue-400',
          'neutral': 'border-yellow-400',
          'sad': 'border-red-400',
          'angry': 'border-orange-400',
          'anxious': 'border-purple-400'
        };
        
        // 移除所有颜色类
        Object.values(moodColors).forEach(color => {
          this.classList.remove(color);
        });
        
        // 添加选中的颜色
        const selectedMood = this.value;
        if (moodColors[selectedMood]) {
          this.classList.add(moodColors[selectedMood]);
        }
      });
      
      // 触发初始状态
      moodSelect.dispatchEvent(new Event('change'));
    }
    
    // 日记条目点击优化
    const journalEntries = document.querySelectorAll('.journal-entry');
    journalEntries.forEach(entry => {
      entry.addEventListener('click', function() {
        // 添加选中效果
        journalEntries.forEach(e => e.classList.remove('border-l-4', 'border-primary'));
        this.classList.add('border-l-4', 'border-primary');
        
        // 添加加载动画
        const journalEditor = document.querySelector('textarea');
        if (journalEditor) {
          journalEditor.classList.add('opacity-50');
          
          setTimeout(() => {
            journalEditor.classList.remove('opacity-50');
          }, 500);
        }
      });
    });
    
    // 反思提示交互优化
    const addPromptButtons = document.querySelectorAll('.text-sm.text-primary, .text-sm.text-secondary, .text-sm.text-accent');
    addPromptButtons.forEach(button => {
      button.addEventListener('click', function() {
        // 添加点击反馈
        this.classList.add('scale-95');
        setTimeout(() => {
          this.classList.remove('scale-95');
        }, 200);
        
        // 获取提示文本
        const promptText = this.parentElement.querySelector('p').textContent;
        
        // 添加到编辑器
        const journalEditor = document.querySelector('textarea');
        if (journalEditor) {
          journalEditor.value += `\n\n${promptText}\n`;
          journalEditor.focus();
          
          // 滚动到编辑器底部
          journalEditor.scrollTop = journalEditor.scrollHeight;
        }
        
        // 添加到编辑器的动画
        const floatingPrompt = document.createElement('div');
        floatingPrompt.textContent = '✓ Prompt added';
        floatingPrompt.classList.add('fixed', 'bg-primary', 'text-white', 'px-3', 'py-1', 'rounded', 'text-sm', 'z-50');
          
        // 定位在按钮附近
        const rect = this.getBoundingClientRect();
        floatingPrompt.style.left = `${rect.left}px`;
        floatingPrompt.style.top = `${rect.top - 30}px`;
          
        // 添加到页面并设置动画
        document.body.appendChild(floatingPrompt);
          
        setTimeout(() => {
          floatingPrompt.style.opacity = '0';
          floatingPrompt.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            floatingPrompt.remove();
          }, 300);
        }, 1000);
      });
    });
  }
};
