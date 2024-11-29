import { Header } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import Logo from '../logo/Logo'

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

function MainHeader() {
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '6px'
        }}>

            <Logo />
            <Menu
                theme={'dark'}
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    )
}

export default MainHeader