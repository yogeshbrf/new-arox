import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

opts = Options()
opts.add_argument('--headless')
opts.add_argument('--window-size=1200,1050')
driver = webdriver.Chrome(options=opts)
try:
    driver.get('http://localhost:3000/login-button.html')
    time.sleep(2)
    driver.save_screenshot('scratch/login_button_full_page.png')
    print('Full page screenshot saved!')

    # Click the left button to trigger animation and screenshot mid-walk
    btn = driver.find_element('id', 'btn-left')
    btn.click()
    time.sleep(0.4)
    driver.save_screenshot('scratch/login_button_animating.png')
    print('Animating screenshot saved!')
finally:
    driver.quit()
