function Layout({ children }) {
  return (
    <div class="row">
      <div className="col-12">
      <div className="container p-5 border m-5 rounded shadow-lg">
        <div className="row">
          <div className="col-md-12">
            <h3>Sample Attendance Tracker</h3>
            <h4 className="mt-4">Daily Attendance Form</h4>
            {children}
          </div>
        </div>
      </div>
      </div>
      <p className="text-center">
        <small>
          Developed by <strong>Deym</strong>
        </small>
      </p>
    </div>
  );
}

export default Layout;
