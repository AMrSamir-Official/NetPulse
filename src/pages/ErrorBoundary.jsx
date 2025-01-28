import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // تحديث الحالة لتظهر واجهة المستخدم البديلة
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // يمكن استخدام هذه الدالة لتسجيل الأخطاء
    console.error("خطأ تم التقاطه في ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // واجهة المستخدم البديلة عند حدوث خطأ
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h1>حدث خطأ ما.</h1>
          <p>يرجى المحاولة مرة أخرى لاحقًا.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
