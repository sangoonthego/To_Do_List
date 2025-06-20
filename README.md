# Minimalist To-Do List

A clean, responsive, and feature-rich to-do list application built with vanilla HTML, CSS, and JavaScript. Perfect for managing daily tasks with a beautiful minimalist design and dark/light theme support.

## ✨ Features

- **Add Tasks**: Create new tasks with optional deadlines
- **Mark Complete**: Toggle task completion status
- **Edit Tasks**: Modify existing task descriptions
- **Delete Tasks**: Remove tasks with smooth animations
- **Filter Tasks**: View all, completed, or uncompleted tasks
- **Deadline Tracking**: Set and track task deadlines with overdue indicators
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Local Storage**: Tasks persist across browser sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start managing your tasks!

## 📱 Usage

### Adding a Task
1. Type your task description in the input field
2. Optionally set a deadline using the date picker
3. Click "Add" to create the task

### Managing Tasks
- **Complete/Uncomplete**: Click the "Done"/"Undone" button
- **Edit**: Click the pencil icon (✏️) to modify task text
- **Delete**: Click the trash icon (🗑️) to remove tasks
- **Filter**: Use the dropdown to view different task categories

### Theme Toggle
- Click the moon/sun icon (🌓) in the top-right corner to switch between light and dark themes
- Your theme preference is automatically saved

## 🛠️ Technical Details

### File Structure
```
To_Do_List/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **Local Storage API**: Persistent data storage
- **CSS Custom Properties**: Dynamic theming system

### Key Features Implementation
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Efficient DOM manipulation and event handling
- **Cross-browser Compatibility**: Works across all modern browsers

## 🎨 Design Features

- **Minimalist Interface**: Clean and uncluttered design
- **Smooth Animations**: Fade-in effects and hover transitions
- **Color Scheme**: Warm accent colors with excellent contrast
- **Typography**: Modern font stack with proper hierarchy
- **Visual Feedback**: Clear states for completed, overdue, and active tasks

## 🔧 Customization

The application is easily customizable through CSS variables:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #222;
  --accent-color: #c59d5f;
  --muted-color: #888;
  --border-radius: 12px;
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have suggestions, please open an issue in the repository.

---

**Built with ❤️ using vanilla web technologies** 