import './App.css';


function App() {
  return (


  <section class="pricing py-5">
  <div class="container">
  <div class="row">
    {/* 1st col */}
    <div className="col-sm">
      <div class="card" >
      <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
      <h1 class="card-price text-center">$0<span class="period">/month</span></h1>
      <hr></hr>
      <ul className="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
  
            <div class="d-grid">
              <a href="/" class="btn btn-primary text-uppercase">Button</a>
              </div>
  </div>
</div>
    

{/* 2nd col */}
    <div className="col-sm">
      <div class="card" >
        <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h1 class="card-price text-center">$9<span class="period">/month</span></h1>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
  


            <div class="d-grid">
            <a href="/" class="btn btn-primary text-uppercase">Button</a>
  </div>
</div>
    </div>


    {/* 3rd col */}
    <div className="col-sm">
      <div class="card" >
      <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h1 class="card-price text-center">$49<span class="period">/month</span></h1>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>


            <div class="d-grid">
            <a href="/" class="btn btn-primary text-uppercase">Button</a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>

        
  )
}

export default App;
