---
###################### hero slider ###########################
banner_slider:
  enable: true
  slider_item:
    # visible slide
    - bg_image: "/images/banner/banner-1.jpg"
      subtitle:  Is a one-stop-shop for fabrication and machining.
      title: Apache Fabricators 
      content: We supply fabrication, machining and repair services to a wide range of markets, including, onshore, offshore, subsea, petrochemical, industrial, refining, commercial and more.
      paginationIcon: TfiComments
      paginationName: Welding
      button:
        enable: false
        label: More details
        link: /services
      hidden: false

    # hidden slide - only for button
    - bg_image: "/images/banner/banner-2.jpg"
      subtitle: Precision-crafted metal structures for demanding environments.
      title: Fabrication
      content: We specialize in the fabrication of custom metal structures and components with high precision and efficiency. Our facility is equipped to handle complex projects across multiple industries, delivering superior quality and durability for offshore, onshore, and subsea applications.
      paginationIcon: TfiBarChart
      paginationName: Fabrication
      button:
        enable: false
        label: More details
        link: /services
      hidden: true

    - bg_image: "/images/banner/banner-3.jpg"
      subtitle: High-accuracy machining for complex industrial components.
      title: CNC Machining
      content: Our advanced CNC machining capabilities allow us to produce intricate and high-tolerance parts with exceptional accuracy. We work with various materials to meet the demanding specifications of the energy, automotive, and industrial sectors.
      paginationIcon: TfiStatsUp
      paginationName: CNC MACHINING
      button:
        enable: false
        label: More details
        link: /services
      hidden: true

    - bg_image: "/images/banner/banner-4.jpg"
      subtitle: Protective finishes engineered to last in extreme conditions.
      title: Coating
      content: We offer professional industrial coating services that enhance the durability, resistance, and lifespan of your equipment. From corrosion protection to specialized finishes, our coating solutions are tailored to withstand extreme conditions and heavy-duty use.
      paginationIcon: TfiPackage
      paginationName: Coating
      button:
        enable: false
        label: More details
        link: /services
      hidden: true


########################################## Service ####################################
service:
  enable: true
  subtitle: Serving key sectors with precision and quality
  title: Our Industries
  # service item comes from content/services folder
########################################## ServiceMain ####################################
servicesMain:
  enable: true
  subtitle: Serving key sectors with precision and quality
  title: Our Services
  # service item comes from content/servicesMain folder
######################################## About #########################################
about:
  enable: true
  bg_image: "/images/background/about-bg.jpg"
  title: Our Services
  content: We understand that each customer has unique needs, and we are committed to providing every customer with the specific services they require why deal with all the hassles of different vendors when you can rest assured that when your part leaves apache Fabricators, it will be nothing less than perfect. Apache Fabricators has no limitations when it comes to fabrication. If it needs to be made of steel, we can fabricate it.
  # bullet point
  bulletPoint:
    - Welding
    - Fabrication
    - CNC Machine
    - Plate Processing
    - Coating
    - Load Testing
    - Full Turnkey Service

##################################### Skill ##############################################
our_expertise:
  enable: true
  subtitle: Experience & Technology
  title: Competitive Global Advantages
  content: Apache Fabricators is a certified Manufacturing Company committed to meeting and exceeding customer’s requirements. We have reviewed the problems that cause delays and instituted procedures to ensure that your parts reach you on time we pledge to quote your parts at a fair price, and to offer suggestions for reducing cost whenever possible.
  # funfacts
  funfacts:
    - icon: TfiServer # themify icon pack : https://react-icons.github.io/react-icons/icons/tfi/
      title: Projects Done
      count: 1000

    - icon: TfiFaceSmile # themify icon pack : https://react-icons.github.io/react-icons/icons/tfi/
      title: Satisfied Clients
      count: 789

    - icon: TfiThumbUp # themify icon pack : https://react-icons.github.io/react-icons/icons/tfi/
      title: Cup Of Coffee
      count: 580

  # progressbar
  progressbar:
    - title: Excelence
      progress: 100%

    - title: Service
      progress: 100%

    - title: Delivery
      progress: 100%

########################################## project ####################################
project:
  enable: true
  title: Quality and Certifications
  subtitle: Trusted certifications and top-tier project execution 
  # project item comes from content/project folder

########################################### Mission ###################################
mission:
  enable: true
  # mission content comes from section mission-vision.md file
---
